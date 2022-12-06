import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

// eslint-disable-next-line react/prefer-stateless-function
class Error extends React.Component {
  render() {
    return (
      <>
        <div>Error 404</div>
      </>
    );
  }
}

const ErrorPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home', { replace: true });
  });
  return (<Error />);
};

export default ErrorPage;
