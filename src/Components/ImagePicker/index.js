import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import captionsSlice from '../../store/captions';
import imagesSlice from '../../store/images';

function ImagePick() {
  const captionState = useSelector(state => state.captions);
  const imageState = useSelector(state => state.images)
  let dispatch = useDispatch();
  let {receiveSubmit} = captionsSlice.actions;
  let {setImage, resetImage} = imagesSlice.actions;

  const [captionIdx, setCaptionIdx] = useState(0);
  // const [image, setImage] = useState(null);

  generateRandomIdx = () => {
    dispatch(receiveSubmit());
  }

  handleSend = () => {
    dispatch(receiveSubmit());
    dispatch(resetImage());
  }

  pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      // setImage(result.assets[0].uri);
      dispatch(setImage(result.assets[0].uri))
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {imageState.selectedImage && <Image source={{ uri: imageState.selectedImage }} style={{ width: 400, height: 400 }} />}
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <Button title='Send' onPress={handleSend}/> 
    </View>
  );
}

export default ImagePick