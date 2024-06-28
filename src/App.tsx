import { useDispatch, useSelector } from 'react-redux';
import './styles/App.scss';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { Counter } from './redux/types';
import {
  selectAppSlice,
  setButtonStyle,
  setCounter,
  setCounterProps,
  setSize,
  setState,
} from './redux/appSlice';
import { buttonSize, counterSize, stateValue } from './optionsData';

function App() {
  const dispatch = useDispatch();
  const { buttonStyle, state, size, counter, counterProps } = useSelector(selectAppSlice);

  const handleCounterPropChange = (prop: keyof Counter, value: any) => {
    dispatch(setCounterProps({ [prop]: value }));
  };

  return (
    <>
      <Header />
      <div className='controls'>
        <div className='button-controls'>
          <h3>Стили для кнопки</h3>
          <label>
            Button Style:
            <select value={buttonStyle} onChange={(e) => dispatch(setButtonStyle(e.target.value))}>
              <option value='primary'>Primary</option>
              <option value='secondary'>Secondary</option>
            </select>
          </label>
          <label>
            State:
            <select value={state} onChange={(e) => dispatch(setState(e.target.value))}>
              {stateValue.map((item) => (
                <option key={item.id} value={item.value}>
                  {item.text}
                </option>
              ))}
            </select>
          </label>
          <label>
            Size:
            <select value={size} onChange={(e) => dispatch(setSize(parseInt(e.target.value)))}>
              {buttonSize.map((item) => (
                <option key={item.id} value={item.value}>
                  {item.text}
                </option>
              ))}
            </select>
          </label>
          <label>
            Counter:
            <select
              value={counter.toString()}
              onChange={(e) => dispatch(setCounter(e.target.value === 'true'))}
            >
              <option value='false'>False</option>
              <option value='true'>True</option>
            </select>
          </label>
        </div>

        <div className='counter-controls'>
          <h3>Стили для счетчика</h3>
          <label>
            Counter Style:
            <select
              value={counterProps.counterStyle}
              onChange={(e) => handleCounterPropChange('counterStyle', e.target.value)}
            >
              <option value='counter-primary'>Primary</option>
              <option value='counter-secondary'>Secondary</option>
            </select>
          </label>
          <label>
            Stroke:
            <select
              value={counterProps.stroke.toString()}
              onChange={(e) => handleCounterPropChange('stroke', e.target.value === 'true')}
            >
              <option value='false'>False</option>
              <option value='true'>True</option>
            </select>
          </label>
          <label>
            Pulse:
            <select
              value={counterProps.pulse.toString()}
              onChange={(e) => handleCounterPropChange('pulse', e.target.value === 'true')}
            >
              <option value='false'>False</option>
              <option value='true'>True</option>
            </select>
          </label>
          <label>
            Size:
            <select
              value={counterProps.size}
              onChange={(e) => handleCounterPropChange('size', parseInt(e.target.value))}
            >
              {counterSize.map((item) => (
                <option key={item.id} value={item.value}>
                  {item.text}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className='controls__button'>
          <Button text='Что сделать' />
        </div>
      </div>
    </>
  );
}

export default App;
