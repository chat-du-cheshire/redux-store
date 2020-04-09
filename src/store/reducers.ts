import {ADD_TODO, REMOVE_TODO} from "./actions";

export const inititalState = {
  loaded: false,
  loading: false,
  data: [{label: 'Doing 1', complete: false}]
};

export function reducer(state = inititalState, action: {type: string, payload: any}) {
  switch (action.type) {
    case ADD_TODO: {
      const todo = action.payload;
      const data = state.data.concat(todo);
      return {
        ...state, data
      }
    }
    case REMOVE_TODO: {
      const todo = action.payload;
      const data = state.data.filter(item => item.label !== todo.label)
      return {
        ...state, data
      }
    }
  }
  return state;
}
