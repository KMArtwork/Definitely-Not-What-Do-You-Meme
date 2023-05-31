import {combineReducers} from '@reduxjs/toolkit';
import captionsSlice from './captions';
import imagesSlice from './images';

const mainReducer = combineReducers({
  captions: captionsSlice.reducer,
  images: imagesSlice.reducer
})

export default mainReducer;