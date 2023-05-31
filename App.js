import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';
import ImagePick from './src/Components/ImagePicker';

import { Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import mainReducer from './src/store';
import Captions from './src/Components/Captions';

let mainStore = configureStore({
  reducer: mainReducer
})

export default function App() {



  return (
    <Provider store={mainStore}>
      <View style={styles.container}>
        <Captions style={styles}/>
        <ImagePick />
        <StatusBar style="auto" />
      </View>      
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 36,
  }
});
