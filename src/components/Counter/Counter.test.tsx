import { test, describe, assert } from 'vitest';
import { render } from '../../utils/test-utils';
import { Counter } from './index';

describe('Counter component', () => {
  test('рендер счетчика с указанным значением', async () => {
    const count = 5;

    const { getByText } = render(<Counter count={count} />);

    const counterElement = getByText(count.toString());
    assert(counterElement !== null, 'Счетчик не содержит ожидаемое значение');
  });

  test('рендер счетчика с другим значением', async () => {
    const count = 10;

    const { getByText } = render(<Counter count={count} />);

    const counterElement = getByText(count.toString());
    assert(counterElement !== null, 'Счетчик не содержит ожидаемое значение');
  });
});
