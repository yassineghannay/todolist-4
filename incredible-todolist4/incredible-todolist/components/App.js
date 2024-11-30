import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './src/components/ToDoList';
import ToDoForm from './src/components/ToDoForm'; // Import ToDoForm

const App = () => {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (taskText) => {
    if (taskText && !tasks.includes(taskText)) {
      setTasks([...tasks, taskText]); // Add new task to the list
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ToDoForm addTask={addTask} /> {/* Pass addTask function */}
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
