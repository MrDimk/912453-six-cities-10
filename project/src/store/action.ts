import { createAction } from '@reduxjs/toolkit';
import { AccessType, City } from '../const';
import { Offers, UserData } from '../types/types';


export const changeCity = createAction<{ city: City }>('main/changeCity');
export const updateOfferList = createAction('main/udateOfferList');
export const loadOffers = createAction<Offers>('data/loadOffers');
export const setLoadingStatus = createAction<boolean>('data/setLoadingStatus');
export const requireAuthorization = createAction<AccessType>('user/requireAuthorization');
export const changeUserData = createAction<UserData>('user/changeData');
