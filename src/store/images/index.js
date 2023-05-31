import {createSlice} from '@reduxjs/toolkit';

const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    selectedImage: null,
  },
  reducers: {
    resetImage(state, action){
      state.selectedImage = null;
    },
    setImage(state, action){
      state.selectedImage = action.payload
    }
  }
})

export default imagesSlice;