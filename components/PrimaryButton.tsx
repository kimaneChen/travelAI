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
    <Pressable onPress={pressHandler} style={styles.container}>
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#72063c',
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    margin: 4,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
