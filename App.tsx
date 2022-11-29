import { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState<number | undefined>();

  function pickedNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={['#72063c', '#ddb52f']} style={styles.appContainer}>
      <ImageBackground
        // eslint-disable-next-line global-require
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.imageBackground}
        imageStyle={styles.bacgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  bacgroundImage: {
    opacity: 0.15,
  },
});
