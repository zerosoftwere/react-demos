import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('<Greeting>', () => {
  test('renders hello world as a text', () => {
    render(<Greeting />);

    const helloElement = screen.getByText(/hello world/i);
    expect(helloElement).toBeDefined();
  });

  test('render good to see you if the button was not clicked', () => {
    render(<Greeting />);

    const outputElement = screen.getByText(/good to see you/i);
    expect(outputElement).toBeDefined();
  });

  test('render changed if the button is clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.getByText(/changed/i);

    expect(outputElement).toBeDefined();
  });

  test('should not render good to see you if button is clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText(/good to see you/i);
    expect(outputElement).toBeNull();
  })
});
