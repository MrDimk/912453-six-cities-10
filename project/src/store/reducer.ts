import { createReducer } from '@reduxjs/toolkit';
import { AccessType, CITIES, City } from '../const';
import { Offer, Offers, Reviews } from '../types/types';
import { changeCity, changeUserData, loadFavoriteOffers, loadNearbyOffers, loadOffer, loadOffers, loadReviews, postNewReview, requireAuthorization, setLoadingStatus, toggleFavoriteOffer } from './action';

const DEFAULT_MAP_SETTINGS: City = CITIES[0];

type AppState = {
  currentCity: City,
  offers: Offers,
  currentOffer: Offer | null,
  currentOfferReviews: Reviews | null,
  currentNearbyOffers: Offers | null,
  favoriteOffers: Offers | [] | null,
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
  currentOffer: null,
  currentOfferReviews: null,
  currentNearbyOffers: null,
  favoriteOffers: null,
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
    .addCase(loadOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.currentOfferReviews = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.currentNearbyOffers = action.payload;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(toggleFavoriteOffer, (state, action) => {
      const currentFavorites = state.favoriteOffers;
      const updatedOffer = action.payload;
      if (currentFavorites && currentFavorites.length > 0) {
        if (updatedOffer.isFavorite) {
          state.favoriteOffers = [...currentFavorites.slice(), updatedOffer];
        } else {
          const index = currentFavorites.findIndex((offer) => offer.id === updatedOffer.id);
          state.favoriteOffers = [...currentFavorites.slice(0, index), ...currentFavorites.slice(index + 1)];
        }
      } else {
        state.favoriteOffers = [updatedOffer];
      }
    })
    .addCase(postNewReview, (state, action) => {
      state.currentOfferReviews = action.payload;
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
