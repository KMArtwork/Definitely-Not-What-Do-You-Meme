import React from "react";
import { Button, Image, View, Platform, StyleSheet } from 'react-native';
import imagesSlice from '../../store/images';
import { useSelector } from 'react-redux';


function ImageDisplay() {

  const imageState = useSelector(state => state.images)

  return(
    imageState.selectedImage ?
        <Image source={{ uri: imageState.selectedImage }} style={styles.image} />
        :
        <View style={styles.placeholder}></View>
  )

}

const styles = StyleSheet.create({
  placeholder: {
    // flex: 1,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    backgroundColor: "rgba(230, 230, 230, 0.2)",
    width: 380,
    height: 380,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: 380, 
    height: 380,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
  }
})

export default ImageDisplay;