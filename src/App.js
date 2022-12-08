import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import CalculatorPage from './pages/calculator';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import QuotePage from './pages/QuotePage';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>

      </>
    );
  }
}

export default App;
