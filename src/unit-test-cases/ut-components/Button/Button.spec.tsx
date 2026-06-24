import { render, screen } from '@testing-library/react';
import Button from './Button';

it('renders button', () => {
    
  render(<Button />);

  expect(
    screen.getByRole('button', { name: /submit/i })
  ).toBeInTheDocument();
});