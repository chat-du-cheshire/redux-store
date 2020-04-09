export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: any;

  get value() {
    return this.state;
  }

  constructor(reducers = {}, initialState = {}) {
    this.state = initialState;
  }


  dispatch(param: { payload: { label: string; complete: boolean }; type: string }) {
    this.state = {
      ...this.state,
      todos: this.state.todos.concat(param.payload)
    }

    console.log(this.state)
  }
}
