import { render, fireEvent } from '../../utils/test-utils';
import '@testing-library/jest-dom';
import { Button } from './index';

describe('Button component', () => {
  test('рендер кнопки', () => {
    const { getByText } = render(<Button text='Тест' />);

    expect(getByText('Тест')).toBeInTheDocument();
  });

  test('увеличивает счетчик при нажатии кнопки', () => {
    const { getByText } = render(<Button text='Тест' />);

    const button = getByText('Тест');
    fireEvent.click(button);

    expect(button).toHaveTextContent('1');
  });
});
