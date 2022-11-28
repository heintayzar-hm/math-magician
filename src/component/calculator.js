import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <>
        <section id="calculator" className="lg:w-1/2 w-full">
          <div className="w-full leading-[80px] bg-zinc-500 text-white text-right text-3xl">0</div>
          <div className="grid grid-cols-4  leading-[80px] text-center bg-slate-200">
            <div className="cursor-pointer border-[1px] border-double border-gray-400">AC</div>
            <div className="cursor-pointer border-[1px] border-double border-gray-400">+/-</div>
            <div className="cursor-pointer border-[1px] border-double border-gray-400">%</div>
            <div className="cursor-pointer bg-yellow-600 border-[1px] border-double border-gray-400">&#247;</div>

            <div className="cursor-pointer border-[1px] border-double border-gray-400">7</div>
            <div className="cursor-pointer border-[1px] border-double border-gray-400">8</div>
            <div className="cursor-pointer border-[1px] border-double border-gray-400">9</div>
            <div className="cursor-pointer bg-yellow-600 border-[1px] border-double border-gray-400">&times;</div>

            <div className="cursor-pointer border-[1px] border-double border-gray-400">4</div>
            <div className="cursor-pointer border-[1px] border-double border-gray-400">5</div>
            <div className="cursor-pointer border-[1px] border-double border-gray-400">6</div>
            <div className="cursor-pointer bg-yellow-600 border-[1px] border-double border-gray-400">-</div>

            <div className="cursor-pointer border-[1px] border-double border-gray-400">1</div>
            <div className="cursor-pointer border-[1px] border-double border-gray-400">2</div>
            <div className="cursor-pointer border-[1px] border-double border-gray-400">3</div>
            <div className="cursor-pointer bg-yellow-600 border-[1px] border-double border-gray-400">+</div>

            <div className="cursor-pointer col-span-2 text-center border-[1px] border-double border-gray-400">0</div>
            <div className="cursor-pointer border-[1px] border-double border-gray-400">.</div>
            <div className="cursor-pointer bg-yellow-600 border-[1px] border-double border-gray-400">=</div>
          </div>
        </section>
      </>
    );
  }
}

export default Calculator;
