import { createAction } from '@reduxjs/toolkit';
import { AccessType, City } from '../const';
import { Offer, Offers, Reviews, UserData } from '../types/types';


export const changeCity = createAction<{ city: City }>('main/changeCity');
export const updateOfferList = createAction('main/udateOfferList');
export const loadOffers = createAction<Offers>('data/loadOffers');
export const loadOffer = createAction<Offer>('data/loadOffer');
export const loadReviews = createAction<Reviews>('data/loadReviews');
export const loadNearbyOffers = createAction<Offers>('data/loadNearbyOffers');
export const loadFavoriteOffers = createAction<Offers>('data/favoriteOffers');

export const setLoadingStatus = createAction<boolean>('data/setLoadingStatus');

export const requireAuthorization = createAction<AccessType>('user/requireAuthorization');
export const changeUserData = createAction<UserData>('user/changeData');
