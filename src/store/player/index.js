import {createSlice} from '@reduxjs/toolkit';

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    score: 0,
    isVoteRound: false,
  },
  reducers: {
    addToScore(state, action){
      state.score = state.score + action.payload;
    },
    setIsVoteRound(state, action){
      state.isVoteRound = !state.isVoteRound;
    }
  }
})

export default playerSlice;