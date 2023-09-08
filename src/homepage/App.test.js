import { render, screen } from '@testing-library/react';
import App from './HomePage';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hola/i);
  expect(linkElement).toBeInTheDocument();
});
