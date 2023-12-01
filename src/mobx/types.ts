// types.ts
import {Instance} from 'mobx-state-tree';
import TodoModel from './TodoModel';
import TodoStore from './TodoStore';

export type TodoModelType = Instance<typeof TodoModel>;
export type TodoStoreType = Instance<typeof TodoStore>;
