import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders dupa', () => {
  render(<App />);
  const linkElement = screen.getByText(/dupa/i);
  expect(linkElement).toBeInTheDocument();
});
