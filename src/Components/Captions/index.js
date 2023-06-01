import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { useSelector } from 'react-redux';

function Captions (props) {

  let state = useSelector(state => state.captions);

  return(
    <View style={styles.view}>
      <Text style={styles.text}>{state.captions[state.activeCaptionIdx]}</Text>
    </View>

  )

}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 20,
    marginBottom: 20,
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
  }
})

export default Captions;