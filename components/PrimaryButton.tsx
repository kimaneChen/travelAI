import React, { ReactElement } from 'react';
import { View, Text, Pressable, PressableProps } from 'react-native';

// export interface PrimaryButtonProps extends PressableProps {
//   test: ReactElement | ReactElement[] | string | number;
// }

function PrimaryButton(props: {
  children: ReactElement | ReactElement[] | string | number;
}) {
  const { children } = props;
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

export default PrimaryButton;
