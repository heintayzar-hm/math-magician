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
            When calculators first started becoming popular in the mid-20th century, they were seen
            as revolutionary
            devices that could perform complex mathematical calculations quickly and accurately.
            Similarly,
            today&apos;s advanced AI models like ChatGPT are also seen as revolutionary devices that
            can perform a wide range
            of tasks, including language processing and prediction, with speed and accuracy.
            While calculators and AI
            models like ChatGPT may seem very different on the surface, both are examples
            of technological advancements
            that have changed the way we approach problem-solving and decision-making.

          </p>
        </main>
      </>
    );
  }
}

export default HomePage;
