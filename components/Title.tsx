import { ReactElement } from 'react';
import { Text, StyleSheet } from 'react-native';

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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ddb52f',
    borderRadius: 4,
    padding: 12,
  },
});
