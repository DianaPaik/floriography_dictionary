import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextItem from './components/TextItem';
import TodoList from './components/TodoList';

function App() {
  return (
    <View style={styles.container}>
      <TextItem text="Hello world from React Naitve Web" />
      <TodoList />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;