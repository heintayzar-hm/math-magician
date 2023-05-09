import React from 'react';
import quotes from './constant';
// eslint-disable-next-line react/prefer-stateless-function
class QuotePage extends React.Component {
  render() {
    const style = {
      h2: {
        fontSize: '25px',
        fontWeight: '700',
      },
      main: {
        height: '80vh',
        width: '80vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
      },
    };
    return (
      <>
        <main style={style.main}>
          <h2 style={style.h2}>
            {
              quotes[Math.floor(Math.random() * quotes.length)]
            }
          </h2>
        </main>
      </>
    );
  }
}

export default QuotePage;
