import {createSlice} from '@reduxjs/toolkit';

const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    selectedImage: null,
    voteImages: [],
  },
  reducers: {
    resetImage(state, action){
      state.selectedImage = null;
    },
    setImage(state, action){
      state.selectedImage = action.payload
    },
    addToVoteImages(state, action){
      state.voteImages = [...state.voteImages, action.payload]
    }
  }
})

export default imagesSlice;