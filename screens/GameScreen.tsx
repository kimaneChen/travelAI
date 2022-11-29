import { View, Text, StyleSheet } from 'react-native';

import Title from '../components/Title';

function GameScreen() {
  return (
    <View style={styles.gameScreen}>
      <Title>{`Opponent's Guess`}</Title>
      <Text>GUESS</Text>
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
