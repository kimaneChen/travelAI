import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Title from '../components/ui/Title';
import generateRandomBetween from '../utils/generateRandomBetween';
import NumberContainer from '../components/game/NumberContainer';

export interface GameScreenProps {
  userNumber: number;
}

function GameScreen({ userNumber }: GameScreenProps) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(userNumber);

  return (
    <View style={styles.gameScreen}>
      <Title>{`Opponent's Guess`}</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higer or Lower ?</Text>
        <Text> + -</Text>
      </View>
      <View>
        <Text>LOG ROUND</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  gameScreen: {
    flex: 1,
    padding: 24,
  },
});
