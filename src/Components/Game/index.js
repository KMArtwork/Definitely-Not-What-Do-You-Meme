import {useSelector} from 'react-redux';

import Captions from '../Captions';
import ImageDisplay from '../ImageDisplay';
import GameButtons from '../GameButtons';
import Voting from '../Voting';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';



function Game() {

  const playerState = useSelector(state => state.player);
  
  return (
        <>
          {playerState.isVoteRound ?
            <Voting />
          :
          <>
            <Captions />
            <ImageDisplay />
            <GameButtons />
            <Text style={{color: 'white', textAlign: 'center', fontSize: 24}}>Score: {playerState.score}</Text>
            <StatusBar style="auto" />
          </>
          } 
        </>
  );
}

export default Game;