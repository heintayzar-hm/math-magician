import React from 'react';
import { decodeHTMLEntities } from '../helper/util';
import calculate from '../logic/calculate';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const calculateObj = { ...this.state };
    const calculatedObj = calculate(calculateObj, e.target.innerText);
    this.setState(calculatedObj);
  }

  render() {
    const calculatorEl = [['AC', '+/-', '%', '÷'], [7, 8, 9, 'x'], [4, 5, 6, '-'], [1, 2, 3, '+'], [0, '.', '=']];
    const { total, next, operation } = this.state;
    return (
      <>
        <section id="calculator" className="lg:w-1/2 w-full">
          <div className="w-full leading-[80px] bg-zinc-500 text-white text-right text-3xl">
            {
            (total === null && operation === null && next === null) ? 0
              : (
                <>
                  { total }
                  { operation }
                  { next }
                </>
              )
            }

          </div>
          <div className="grid grid-cols-4  leading-[80px] text-center bg-slate-200">
            {calculatorEl.map((item) => (
              (item.length === 4) ? (
                <>
                  <button type="button" onClick={this.handleClick} className="cursor-pointer border-[1px] border-double border-gray-400">{item[0]}</button>
                  <button type="button" onClick={this.handleClick} className="cursor-pointer border-[1px] border-double border-gray-400">{item[1]}</button>
                  <button type="button" onClick={this.handleClick} className="cursor-pointer border-[1px] border-double border-gray-400">{item[2]}</button>
                  <button type="button" onClick={this.handleClick} className="cursor-pointer bg-yellow-600 border-[1px] border-double border-gray-400">{decodeHTMLEntities(item[3])}</button>
                </>
              ) : (
                <>
                  <button type="button" onClick={this.handleClick} className="cursor-pointer col-span-2 text-center border-[1px] border-double border-gray-400">{item[0]}</button>
                  <button type="button" onClick={this.handleClick} className="cursor-pointer border-[1px] border-double border-gray-400">{item[1]}</button>
                  <button type="button" onClick={this.handleClick} className="cursor-pointer bg-yellow-600 border-[1px] border-double border-gray-400">{item[2]}</button>
                </>
              )

            ))}

          </div>
        </section>
      </>
    );
  }
}

export default Calculator;
