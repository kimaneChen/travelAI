/* eslint-disable global-require */
import { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';

export interface GoalInputProps {
  onAddGoal: (enteredGoalText: string) => void;
  showModal: boolean;
  closeModal: () => void;
}

function GoalInput(props: GoalInputProps) {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');
  const { onAddGoal, showModal, closeModal } = props;
  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!..."
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: 'e4d0ff',
    color: '#120438',
    width: '80%',
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    margin: 8,
  },
  button: {
    width: '25%',
    marginHorizontal: 8,
  },
});
