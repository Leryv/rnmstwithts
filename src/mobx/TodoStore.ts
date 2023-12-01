// TodoStore.ts
import {types, destroy} from 'mobx-state-tree';
import TodoModel from './TodoModel';
import {TodoModelType} from './types';

const TodoStore = types
  .model('TodoStore', {
    todos: types.array(TodoModel),
  })
  .actions(self => ({
    addTodo(text: string) {
      const newTodo: TodoModelType = TodoModel.create({
        id: Math.random().toString(),
        text,
      });
      self.todos.push(newTodo);
    },
    toggleTodoCompleted(todoId: string) {
      const todo = self.todos.find(t => t.id === todoId);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo(todoId: string) {
      const todo = self.todos.find(t => t.id === todoId);
      if (todo) {
        destroy(todo);
      }
    },
  }));

export default TodoStore;
