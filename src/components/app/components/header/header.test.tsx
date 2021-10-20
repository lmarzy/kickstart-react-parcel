import React from 'react';

import { render, screen } from '@testing-library/react';

import { Header } from './header';

describe('Header Component', () => {
  test('shows correct title', () => {
    render(<Header />);

    expect(screen.getByText('Header')).toBeInTheDocument();
  });
});
