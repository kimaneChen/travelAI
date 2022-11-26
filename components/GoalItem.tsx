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
    <Pressable onPress={onPressHandler}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    padding: 8,
    backgroundColor: `#5e0acc`,
  },
  goalText: {
    color: 'white',
  },
});
