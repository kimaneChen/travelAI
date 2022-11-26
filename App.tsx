import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem, { GoalItemProps } from './components/GoalItem';
import GoalInput from './components/GoalInput';

interface GoalProps extends GoalItemProps {
  id: string;
}
export default function App() {
  const [courseGoals, setCourseGoals] = useState<GoalProps[]>([]);

  const addGoalHandler = (enteredGoalText: string) => {
    setCourseGoals((currentCourseGoals) => [
      ...(currentCourseGoals || []),
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
          alwaysBounceVertical={false}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
