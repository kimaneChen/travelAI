import React, { ReactElement } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton(props: {
  children: ReactElement | ReactElement[] | string | number;
}) {
  const { children } = props;
  function pressHandler() {
    console.log('eeee');
  }
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        android_ripple={{ color: 'white' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 40,
    margin: 4,
    overflow: 'hidden',
  },
  innerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.75,
  },
});
