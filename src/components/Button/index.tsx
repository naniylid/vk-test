import React from 'react';
import { useSelector } from 'react-redux';
import './Button.module.scss';
import { Counter } from '../Counter';
import { selectAppSlice } from '../../redux/appSlice';

interface ButtonProps {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
  const [count, setCount] = React.useState(0);
  const { buttonStyle, state, size, counter } = useSelector(selectAppSlice);

  const handleClick = () => {
    setCount(count + 1);
  };

  const getClassNames = () => {
    const baseClass = `button ${buttonStyle}`;
    const stateClass = `state-${state}`;
    const sizeClass = `size-${size}-${counter}`;
    return `${baseClass} ${stateClass}  ${sizeClass}`;
  };

  return (
    <button className={getClassNames()} onClick={handleClick}>
      <div className='content-group'>
        {state === 'loading' ? (
          <div className='progress-container'>
            <svg
              className='spinner'
              viewBox='0 0 25 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clip-path='url(#clip0_1_2604)'>
                <path
                  d='M0.5 12C0.5 14.3734 1.20379 16.6935 2.52236 18.6668C3.84094 20.6402 5.71508 22.1783 7.9078 23.0866C10.1005 23.9948 12.5133 24.2324 14.8411 23.7694C17.1689 23.3064 19.3071 22.1635 20.9853 20.4853C22.6635 18.8071 23.8064 16.6689 24.2694 14.3411C24.7324 12.0133 24.4948 9.60051 23.5866 7.4078C22.6783 5.21509 21.1402 3.34094 19.1668 2.02237C17.1935 0.703788 14.8734 1.79185e-07 12.5 0V3C14.28 3 16.0201 3.52784 17.5001 4.51677C18.9802 5.50571 20.1337 6.91131 20.8149 8.55585C21.4961 10.2004 21.6743 12.01 21.3271 13.7558C20.9798 15.5016 20.1226 17.1053 18.864 18.364C17.6053 19.6226 16.0016 20.4798 14.2558 20.8271C12.51 21.1743 10.7004 20.9961 9.05585 20.3149C7.41131 19.6337 6.00571 18.4802 5.01677 17.0001C4.02784 15.5201 3.5 13.78 3.5 12H0.5Z'
                  fill='white'
                />
              </g>
              <defs>
                <clipPath id='clip0_1_2604'>
                  <rect width='24' height='24' fill='white' transform='translate(0.5)' />
                </clipPath>
              </defs>
            </svg>
          </div>
        ) : (
          <>
            {text}
            {counter ? <Counter count={count} /> : null}
          </>
        )}
      </div>
    </button>
  );
};
