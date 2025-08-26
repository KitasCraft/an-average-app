import { render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';
import { MemoryRouter } from 'react-router';

test('renders table reservation form', () => {
  render(<MemoryRouter>
    <BookingPage />
  </MemoryRouter>);
  const linkElement = screen.getByText(/table reservation form/i);
  expect(linkElement).toBeInTheDocument();
});
