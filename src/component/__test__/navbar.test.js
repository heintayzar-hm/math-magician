import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('renders correctly', () => {
    // Arrange

    // Act
    const { container } = render(<HashRouter><Navbar /></HashRouter>);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the correct number of links', () => {
    // Arrange

    // Act
    const { container } = render(<HashRouter><Navbar /></HashRouter>);
    const navLinks = container.querySelectorAll('li');

    // Assert
    expect(navLinks.length).toBe(3);
  });
});
