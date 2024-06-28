import React from 'react';
import { useSelector } from 'react-redux';
import './Counter.module.scss';
import { selectAppSlice } from '../../redux/appSlice';

export interface CounterComponentProp {
  count: number;
}

export const Counter: React.FC<CounterComponentProp> = ({ count }) => {
  const { counterProps } = useSelector(selectAppSlice);

  const getClassNames = () => {
    const baseClass = `counter ${counterProps.counterStyle}`;
    const strokeClass = counterProps.stroke ? 'stroke-true' : 'stroke-false';
    const pulseClass = counterProps.pulse ? 'pulse-true' : 'pulse-false';
    return `${baseClass} ${strokeClass} ${pulseClass}  size-${counterProps.size}`;
  };

  return (
    <>
      <span className={getClassNames()}>
        <span className='hidden-text'>{count}</span>

        {counterProps.pulse ? (
          <>
            <div className='indicator one'></div>
            <div className='indicator two'></div>
          </>
        ) : null}
      </span>
    </>
  );
};
