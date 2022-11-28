import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient colors={['#72063c', '#ddb52f']} style={styles.appContainer}>
      <ImageBackground
        // eslint-disable-next-line global-require
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.imageBackground}
        imageStyle={styles.bacgroundImage}
      >
        <StartGameScreen />
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
