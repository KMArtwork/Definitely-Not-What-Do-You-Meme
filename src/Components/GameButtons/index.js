import React, { useState, useEffect } from 'react';
import { Button, Text, View, Platform, StyleSheet, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import captionsSlice from '../../store/captions';
import imagesSlice from '../../store/images';
import playerSlice from '../../store/player';

function GameButtons() {
  const captionState = useSelector(state => state.captions);
  const imageState = useSelector(state => state.images)
  let dispatch = useDispatch();
  let {setImage, resetImage} = imagesSlice.actions;
  let {setIsVoteRound} = playerSlice.actions

  handleSend = () => {
    dispatch(setIsVoteRound());
  }

  pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      dispatch(setImage(result.assets[0].uri))
    }
  };

  return (
    <View style={styles.row}>
      <Pressable style={styles.findButton} title="Find Image" onPress={pickImage} >
        <Text style={styles.text}>Find Image</Text>
      </Pressable>
      <Pressable style={styles.sendButton} title='Send' onPress={handleSend}>
        <Text style={styles.text}>Send</Text>
      </Pressable> 
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    // height: 75,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  findButton: {
    backgroundColor: '#662281',
    height: 75,
    width: 150,
    borderRadius: 5,
    textAlign: "center",
    alignItems: 'center',
    justifyContent: 'center'
  },
  sendButton: {
    backgroundColor: '#43CC9B',
    height: 75,
    width: 150,
    borderRadius: 5,
    textAlign: "center",
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 26,
  }
})

export default GameButtons