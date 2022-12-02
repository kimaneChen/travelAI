import { ReactElement } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

import Colors from '../../constants/color';

export interface TitleProps {
  children: ReactElement | ReactElement[] | string | number;
}

function Title(props: TitleProps) {
  const { children } = props;
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: 'white',
    borderRadius: 4,
    padding: 12,
    maxWidth: '80%',
    minWidth: 150,
  },
});
