import { createReducer } from '@reduxjs/toolkit';
import { CITIES, City } from '../const';
import { getOffers } from '../mocks/offers';
import { changeCity } from './action';

const DEFAULT_MAP_SETTINGS: City = CITIES[0];

const initialState = {
  currentCity: DEFAULT_MAP_SETTINGS,
  offers: getOffers(),
  cities: CITIES,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.currentCity = action.payload.city;
  });
});
