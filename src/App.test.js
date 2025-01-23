import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Transformers category', () => {
  render(<App />);
  const categoryElement = screen.getByText(/Transformers/i);
  expect(categoryElement).toBeInTheDocument();
});