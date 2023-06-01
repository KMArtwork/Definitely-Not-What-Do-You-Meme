import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, ImageBackground } from 'react-native';
import GameButtons from './src/Components/GameButtons';

import { Provider, useSelector} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import mainReducer from './src/store';
import Captions from './src/Components/Captions';
import ImageDisplay from './src/Components/ImageDisplay';
import Game from './src/Components/Game';

let mainStore = configureStore({
  reducer: mainReducer
})

export default function App() {
  
  return (
    <Provider store={mainStore}>
      <View style={styles.container}>
        <ImageBackground style={styles.bg} source={require('./src/assets/BG-gradient.png')}>
          {/* <Captions style={styles}/>
          <ImageDisplay />
          <GameButtons />
          <StatusBar style="auto" /> */}
          <Game />
        </ImageBackground>
      </View>      
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    justifyContent: 'space-between',
    alignContent: 'space-between',
    width: '100%',
    height: '100%'
  },
});
