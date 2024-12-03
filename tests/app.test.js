import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders Solara Blockchain Explorer', () => {
  render(<App />);
  const linkElement = screen.getByText(/Solara Blockchain Explorer/i);
  expect(linkElement).toBeInTheDocument();
});
