import { createReducer } from '@reduxjs/toolkit';
import { AccessType, CITIES, City } from '../const';
import { Offers } from '../types/types';
import { changeCity, changeUserData, loadOffers, requireAuthorization, setLoadingStatus } from './action';

const DEFAULT_MAP_SETTINGS: City = CITIES[0];

type AppState = {
  currentCity: City,
  offers: Offers,
  cities: City[],
  isLoading: boolean,
  authorizationStatus: AccessType,
  user: {
    email: string | null,
    avatarURL: string | null,
    isPro: boolean | null,
  }
}

const initialState: AppState = {
  currentCity: DEFAULT_MAP_SETTINGS,
  offers: [],
  cities: CITIES,
  isLoading: false,
  authorizationStatus: AccessType.unknown,
  user: {
    email: null,
    avatarURL: null,
    isPro: null,
  }
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.currentCity = action.payload.city;
  })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(changeUserData, (state, action) => {
      state.user.email = action.payload.email;
      state.user.isPro = action.payload.isPro;
      state.user.avatarURL = action.payload.avatarUrl;
    });
});
