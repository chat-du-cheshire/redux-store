export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: any;

  get value() {
    return this.state;
  }

  constructor(reducers = {}, initialState = {}) {
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }


  dispatch(action: { payload: { label: string; complete: boolean }; type: string }) {
    this.state = this.reduce(this.state, action)
  }

  private reduce(state: any, action: any) {
    return Object.entries(this.reducers).reduce(
      (newState, [key, reducer]) => ({...newState, [key]: reducer(state[key], action)}), {});
  }
}
