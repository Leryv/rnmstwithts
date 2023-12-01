// TodoScreen.tsx
import React, {useState} from 'react';
import {observer} from 'mobx-react';
import {View, Text, TextInput, Button, FlatList} from 'react-native';
import {TodoStoreType} from './types'; // Add type definition

interface TodoScreenProps {
  route: {
    params: {
      todoStore: TodoStoreType;
    };
  };
  navigation: any; // Adjust the type as needed
}

const TodoScreen: React.FC<TodoScreenProps> = ({route, navigation}) => {
  const {todoStore} = route.params;
  const [newTodoText, setNewTodoText] = useState('');

  const addTodo = () => {
    todoStore.addTodo(newTodoText);
    setNewTodoText('');
  };

  const toggleTodoCompleted = (todoId: string) => {
    todoStore.toggleTodoCompleted(todoId);
  };

  const removeTodo = (todoId: string) => {
    todoStore.removeTodo(todoId);
  };

  return (
    <View>
      <Text>Todo List</Text>
      <TextInput
        placeholder="Enter new todo..."
        value={newTodoText}
        onChangeText={setNewTodoText}
      />
      <Button title="Add Todo" onPress={addTodo} />
      <FlatList
        data={todoStore.todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <Text>{item.text}</Text>
            <Button
              title="Toggle Completed"
              onPress={() => toggleTodoCompleted(item.id)}
            />
            <Button title="Remove" onPress={() => removeTodo(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default observer(TodoScreen);
