import { render, screen } from '@testing-library/react';
import Loader from '../src/components/Loader';

test('shows loader during data fetch', () => {
  render(<Loader isLoading={true} />);

  const loader = screen.getByTestId('loader');
  expect(loader).toBeInTheDocument();
});

test('does not show loader when data is loaded', () => {
  render(<Loader isLoading={false} />);

  const loader = screen.queryByTestId('loader');
  expect(loader).not.toBeInTheDocument();
});
