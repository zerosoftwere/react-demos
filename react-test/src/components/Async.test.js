import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('<Async/>', () => {
  test('should render post if request succeeds', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => [{ id: 1, title: 'test' }],
    }));

    render(<Async />);

    const listElement = await screen.findAllByRole('listitem');
    expect(listElement).not.toHaveLength(0);
  });
});
