import { View, Text, StyleSheet } from 'react-native';

function GameScreen() {
  return (
    <View>
      <Text>{`Opponent's Guess`}</Text>
      <Text>GUESS</Text>
      <View>
        <Text>Higer or Lowr ?</Text>
        <Text> + -</Text>
      </View>
      <View>
        <Text>LOG ROUND</Text>
      </View>
    </View>
  );
}

export default GameScreen;
