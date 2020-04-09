export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: any;

  get value() {
    return this.state;
  }

  constructor(reducers = {}, initialState = {}) {
    this.subscribers = [];
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }


  dispatch(action: { payload: { label: string; complete: boolean }; type: string }) {
    this.state = this.reduce(this.state, action)
    this.notify()
  }

  subscribe(fn) {
    this.subscribers = this.subscribers.concat(fn);
    this.notify()

    return () => {
      this.subscribers = this.subscribers.filter(f => f !== fn);
    }
  }

  private reduce(state: any, action: any) {
    return Object.entries(this.reducers).reduce(
      (newState, [key, reducer]) => ({...newState, [key]: reducer(state[key], action)}), {});
  }

  private notify() {
    this.subscribers.forEach(fn => fn(this.value));
  }
}
