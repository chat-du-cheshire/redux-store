export const inititalState = {
  loaded: false,
  loading: false,
  data: [{label: 'Doing 1', complete: false}]
};

export function reducer(state = inititalState, action: {type: string, payload: any}) {
  switch (action.type) {
    case 'ADD_TODO': {
      const todo = action.payload;
      const data = state.data.concat(todo);
      return {
        ...state, data
      }
    }
  }
  return state;
}
