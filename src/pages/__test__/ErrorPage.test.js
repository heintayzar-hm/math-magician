import React from 'react';
import { render } from '@testing-library/react';
import ErrorPage from '../ErrorPage';

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn()),
}));

describe('ErrorPage', () => {
  it('renders correctly', () => {
    // Arrange

    // Act
    const { container } = render(<ErrorPage />);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});
