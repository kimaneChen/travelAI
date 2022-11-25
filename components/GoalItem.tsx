import { View, Text, StyleSheet } from 'react-native';

export interface courseGoalItem {
  text: string;
}

function GoalItem(props: courseGoalItem) {
  const { text } = props;
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
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
