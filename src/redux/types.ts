export interface Counter {
  stroke: boolean;
  pulse: boolean;
  size: number;
  counterStyle: string;
}

export type AppTypes = {
  buttonStyle: string;
  state: string;
  size: number;
  counter: boolean;
  counterProps: Counter;
};
