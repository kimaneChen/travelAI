import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/color';

export default function App() {
  const [userNumber, setUserNumber] = useState<number | undefined>();

  function pickedNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    console.log(userNumber);
    screen = <GameScreen userNumber={userNumber} />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.appContainer}
    >
      <ImageBackground
        // eslint-disable-next-line global-require
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.imageBackground}
        imageStyle={styles.bacgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
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
  rootScreen: {
    flex: 1,
  },
});
