import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';

function Captions (props) {

  let state = useSelector(state => state.captions);

  return(
    <>
      <Text style={props.style.text}>{state.captions[state.activeCaptionIdx]}</Text>
    </>

  )

}

export default Captions;