import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export interface GoalInputProps {
  onAddGoal: (enteredGoalText: string) => void;
}

function GoalInput(props: GoalInputProps) {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');
  const { onAddGoal } = props;
  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!..."
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
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
});
