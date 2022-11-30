import { ReactElement } from 'react';
import { Text, StyleSheet } from 'react-native';

import Colors from '../../constants/color';

export interface CardProps {
  children: ReactElement | ReactElement[] | string | number | undefined | null;
}

function InstructionText({ children }: CardProps) {
  return <Text style={styles.instruction}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instruction: {
    fontSize: 24,
    color: Colors.accent500,
  },
});
