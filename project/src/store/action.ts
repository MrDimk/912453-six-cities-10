import { createAction } from '@reduxjs/toolkit';
import { City } from '../const';


export const changeCity = createAction<{ city: City }>('changeCity');
export const updateOfferList = createAction('udateOfferList');
