import React from 'react';

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
            Mathematics is not about calculation, equations, computations, or algorithms,
            It is about understanding --- Willian Paul Thurston
          </h2>
        </main>
      </>
    );
  }
}

export default QuotePage;
