import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';

import GoalItem, { courseGoalItem } from './components/GoalItem';

interface courseGoal extends courseGoalItem {
  id: string;
}
export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');
  const [courseGoals, setCourseGoals] = useState<courseGoal[]>([]);

  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }
  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...(currentCourseGoals || []),
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!..."
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal Test" onPress={addGoalHandler} />
      </View>
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
