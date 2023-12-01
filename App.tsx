// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'mobx-react';
import TodoScreen from './src/mobx/TodoScreen';
import TodoStore from './src/mobx/TodoStore';

const Stack = createStackNavigator();

const App = () => {
  const todoStore = TodoStore.create();

  return (
    <Provider todoStore={todoStore}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Todo">
          <Stack.Screen
            name="Todo"
            component={TodoScreen}
            initialParams={{todoStore}} // Pass the todoStore as navigation params
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
