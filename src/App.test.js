import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home label in navbar', () => {
  render(<App />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
