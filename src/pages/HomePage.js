import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class HomePage extends React.Component {
  render() {
    const style = {
      h2: {
        fontSize: '25px',
        fontWeight: '700',
      },
      main: {
        padding: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      },
      p: { fontSize: '15px', padding: '10px' },
    };
    return (
      <>
        <main style={style.main}>
          <h2 style={style.h2}> Welcome To Our Application, I am Hein Tay Zar</h2>
          <p style={style.p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Soluta eaque itaque unde minima alias a quam nulla cum natus,
            labore, explicabo obcaecati nemo, nihil mollitia volup
            tas harum voluptatibus ipsa maiores.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Soluta eaque itaque unde minima alias a quam nulla cum natus
            , labore, explicabo obcaecati nemo, nihil mollitia volup
            tas harum voluptatibus ipsa maiores.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sol
            uta eaque itaque unde minima alias a quam nulla cum natus, lab
            ore, explicabo obcaecati nemo, nihil mollitia voluptas harum voluptatibus ipsa maiores.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sol
            uta eaque itaque unde minima alias a quam nulla cum natus, lab
            ore, explicabo obcaecati nemo, nihil mollitia voluptas harum voluptatibus ipsa maiores.
          </p>
        </main>
      </>
    );
  }
}

export default HomePage;
