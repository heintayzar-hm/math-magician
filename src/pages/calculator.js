import React from 'react';
import Calculator from '../component/calculator';

// eslint-disable-next-line react/prefer-stateless-function
class CalculatorPage extends React.Component {
  render() {
    const style = {
      main: {
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        padding: '30px',
      },
      h2: {
        fontSize: '25px',
        fontWeight: '700',
      },
      div: {

      },
    };
    return (
      <>
        <main className="grid grid-cols-1 lg:grid-cols-2 p-[30px]">
          <h2 style={style.h2} className="calculator">
            Let&apos;s Do Some Math,
          </h2>
          <div style={style.div}>
            <Calculator />
          </div>

        </main>
      </>
    );
  }
}

export default CalculatorPage;
