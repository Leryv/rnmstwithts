import {types} from 'mobx-state-tree';

const TodoModel = types.model('Todo', {
  id: types.identifier,
  text: types.string,
  completed: false,
});

export default TodoModel;
