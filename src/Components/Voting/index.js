import React, { useState, useEffect } from 'react';
import { Button, Image, View, Text, StyleSheet, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import captionsSlice from '../../store/captions';
import imagesSlice from '../../store/images';
import playerSlice from '../../store/player';
import { StatusBar } from 'expo-status-bar';
import Captions from '../Captions';

function Voting() {

  const imageState = useSelector(state => state.images);
  const dispatch = useDispatch();
  const {setIsVoteRound, addToScore} = playerSlice.actions
  const {resetImage} = imagesSlice.actions
  const {newCaption} = captionsSlice.actions;

  const handlePress = () => {
    dispatch(addToScore(1));
    dispatch(resetImage());
    dispatch(newCaption());
    dispatch(setIsVoteRound());
  }

  return(
    <>
    <Captions />
    <View style={styles.view}>
      <Pressable style={styles.pressable} onPress={handlePress}>
        <Image source={require('../../assets/demo-images/dog.png')} style={styles.image} />        
      </Pressable>
      <Pressable style={styles.pressable} onPress={handlePress}>
        <Image source={require('../../assets/demo-images/roger-elon.jpg')} style={styles.image} />        
      </Pressable>
      <Pressable style={styles.pressable} onPress={handlePress}>
        <Image source={require('../../assets/demo-images/boo-tf.jpg')} style={styles.image} />        
      </Pressable>
      <Pressable style={styles.pressable} onPress={handlePress}>
        <Image source={{ uri: imageState.selectedImage }} style={styles.image} />        
      </Pressable>
    </View>    
    </>

  )

}

const styles = StyleSheet.create({
  view: {
    flex: 5,
    flexWrap: 'wrap',
    flexDirection: 'row',
    // padding: 10,
    // marginBottom: 20, 
    justifyContent: 'center',
    alignContent: 'center'
  },
  image: {
    width: 175, 
    height: 175,
    // marginTop: 20,
    // marginBottom: 20,
    alignSelf: 'center',
  },
  text: {
    color: '#fff',
    // backgroundColor: '#151515',
    textAlign: 'center',
    fontSize: 32,
  },
  pressable: {
    margin: 10
  }
})

export default Voting;