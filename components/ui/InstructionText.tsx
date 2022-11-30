import { ReactNode } from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

import Colors from '../../constants/color';

export interface CardProps {
  children: ReactNode | undefined;
  style: TextStyle | undefined;
}

function InstructionText({ children, style }: CardProps) {
  return <Text style={[styles.instruction, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instruction: {
    fontFamily: 'open-sans',
    fontSize: 24,
    color: Colors.accent500,
  },
});
