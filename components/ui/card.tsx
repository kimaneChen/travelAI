import { ReactElement } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/color';

export interface CardProps {
  children: ReactElement | ReactElement[] | string | number | undefined | null;
}

function Card({ children }: CardProps) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary750,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 6,
  },
});
