import {createSlice} from '@reduxjs/toolkit';

const captionsSlice = createSlice({
  name: 'captions',
  initialState: {
    captions: [
      'When mom says we can get mcdonalds',
      'When you hit your pinky toe on the corner of a wall',
      'When mom wakes you up early for school and the light is right in your face',
    ],
    activeCaptionIdx: 0,
  },
  reducers: {
    receiveSubmit(state, action){
      state.activeCaptionIdx = Math.floor(Math.random() * state.captions.length)
    }
  }
})

export default captionsSlice;