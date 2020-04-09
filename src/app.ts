import { renderTodos } from './utils';
import {ADD_TODO, AddTodo, reducer, RemoveTodo, Store} from "./store";

const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;

const reducers = {
  todos: reducer
}

const store = new Store(reducers);

button.addEventListener(
  'click',
  () => {
    if (!input.value.trim()) return;

    const payload = { label: input.value, complete: false };

    store.dispatch(new AddTodo(payload));

    input.value = '';
  },
  false
);

const unsubscribe = store.subscribe((state) => {
  renderTodos(state.todos.data);
});

destroy.addEventListener('click', unsubscribe, false);

todoList.addEventListener('click', function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    const payload = JSON.parse(target.dataset.todo as string);
    store.dispatch(new RemoveTodo(payload));
  }
});

store.subscribe(console.log)
