import { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import Title from '../components/ui/Title';
import generateRandomBetween from '../utils/generateRandomBetween';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

export interface GameScreenProps {
  userNumber: number;
}

let minBoundary = 1;
let maxBoundary = 100;
function GameScreen(this: unknown, { userNumber }: GameScreenProps) {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber,
  );
  const [currentGuess, setCurrentGuess] = useState(userNumber);

  function nextGuessHandler(direction: string) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong ...', [
        { text: 'Sorry', style: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log('---', maxBoundary, minBoundary);
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.gameScreen}>
      <Title>{`Opponent's Guess`}</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higer or Lower ?</Text>
        <View style={styles.buttons}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            +
          </PrimaryButton>
        </View>
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
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
