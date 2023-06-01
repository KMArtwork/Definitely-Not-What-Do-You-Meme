import {combineReducers} from '@reduxjs/toolkit';
import captionsSlice from './captions';
import imagesSlice from './images';
import playerSlice from './player';

const mainReducer = combineReducers({
  captions: captionsSlice.reducer,
  images: imagesSlice.reducer,
  player: playerSlice.reducer
})

export default mainReducer;