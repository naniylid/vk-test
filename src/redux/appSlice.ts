import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { AppTypes, Counter } from './types';

const initialState: AppTypes = {
  buttonStyle: 'primary',
  state: 'enabled',
  size: 56,
  counter: true,
  counterProps: {
    stroke: false,
    pulse: false,
    size: 24,
    counterStyle: 'counter-primary',
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setButtonStyle: (state, action: PayloadAction<string>) => {
      state.buttonStyle = action.payload;
    },
    setState: (state, action: PayloadAction<string>) => {
      state.state = action.payload;
    },
    setSize: (state, action: PayloadAction<number>) => {
      state.size = action.payload;
    },
    setCounter: (state, action: PayloadAction<boolean>) => {
      state.counter = action.payload;
    },
    setCounterProps: (state, action: PayloadAction<Partial<Counter>>) => {
      state.counterProps = { ...state.counterProps, ...action.payload };
    },
  },
});

export const { setButtonStyle, setState, setSize, setCounter, setCounterProps } = appSlice.actions;

export const selectAppSlice = (state: RootState) => state.appSlice;

export default appSlice.reducer;
