import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AccessType, APIRoute } from '../const';
import { changeUserData, loadFavoriteOffers, loadNearbyOffers, loadOffer, loadOffers, loadReviews, requireAuthorization, setLoadingStatus } from '../store/action';
import { AppDispatch, State } from '../store/state';
import { AuthData, Offer, Offers, Reviews, UserData } from '../types/types';
import { dropToken, saveToken } from './token';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/downloadOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setLoadingStatus(true));
    const { data } = await api.get<Offers>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setLoadingStatus(false));
  },
);

export const fetchOfferAction = createAsyncThunk<Offer, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/loadOffer',
  async (offerId, { dispatch, extra: api }) => {
    dispatch(setLoadingStatus(true));
    const { data } = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
    dispatch(loadOffer(data));
    dispatch(setLoadingStatus(false));
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<Reviews, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/loadReviews',
  async (offerId, { dispatch, extra: api }) => {
    dispatch(setLoadingStatus(true));
    const { data } = await api.get<Reviews>(`${APIRoute.Comments}/${offerId}`);
    dispatch(loadReviews(data));
    dispatch(setLoadingStatus(false));
    return data;
  },
);

export const fetchNearbyOffers = createAsyncThunk<Offers, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/loadReviews',
  async (offerId, { dispatch, extra: api }) => {
    dispatch(setLoadingStatus(true));
    const { data } = await api.get<Offers>(`${APIRoute.Offers}/${offerId}/nearby`);
    dispatch(loadNearbyOffers(data));
    dispatch(setLoadingStatus(false));
    return data;
  },
);

export const fetchFavoriteOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/loadFavoriteOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setLoadingStatus(true));
    const { data } = await api.get<Offers>(APIRoute.Favorite);
    dispatch(loadFavoriteOffers(data));
    dispatch(setLoadingStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AccessType.authorized));
    } catch {
      dispatch(requireAuthorization(AccessType.unauthorized));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(changeUserData(data));
    dispatch(requireAuthorization(AccessType.authorized));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AccessType.unauthorized));
  },
);
