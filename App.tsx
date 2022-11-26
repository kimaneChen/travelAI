import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

interface GoalProps {
  id: string;
  text: string;
}

export default function App() {
  const [courseGoals, setCourseGoals] = useState<GoalProps[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function startAddGoalHandler() {
    setIsModalVisible(true);
  }

  function endAddGoalHandler() {
    setIsModalVisible(false);
  }

  const addGoalHandler = (enteredGoalText: string) => {
    setCourseGoals((currentCourseGoals) => [
      ...(currentCourseGoals || []),
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setIsModalVisible(false);
  };

  function deleteGoalHandler(id: string) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      {isModalVisible && (
        <GoalInput
          onAddGoal={addGoalHandler}
          showModal={isModalVisible}
          closeModal={endAddGoalHandler}
        />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}
            />
          )}
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
