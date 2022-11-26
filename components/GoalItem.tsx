import { View, Text, StyleSheet, Pressable } from 'react-native';

export interface GoalItemProps {
  text: string;
  id: string;
  onDeleteItem: (id: string) => void;
}

function GoalItem(props: GoalItemProps) {
  const { text, onDeleteItem, id } = props;

  function onPressHandler() {
    onDeleteItem(id);
  }

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#111111' }}
        onPress={onPressHandler}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: `#5e0acc`,
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
  },
});
