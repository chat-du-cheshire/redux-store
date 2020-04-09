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


}
