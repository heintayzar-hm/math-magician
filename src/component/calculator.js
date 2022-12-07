/* eslint-disable max-len */
import React, { useState } from 'react';
import { decodeHTMLEntities } from '../helper/util';
import calculate from '../logic/calculate';

const Calculator = () => {
  const calculatorObj = {
    total: 0,
    next: null,
    operation: null,
  };

  const [getCalculatorObj, setCalculatorObj] = useState(calculatorObj);

  const handleClick = (e) => {
    const calculateObj = { ...getCalculatorObj };
    const calculatedObj = calculate(calculateObj, e.target.innerText);
    setCalculatorObj(calculatedObj);
  };

  const calculatorEl = [['AC', '+/-', '%', '÷'], [7, 8, 9, 'x'], [4, 5, 6, '-'], [1, 2, 3, '+'], [0, '.', '=']];
  const { total, next, operation } = getCalculatorObj;
  return (
    <>
      <section id="calculator" className="w-full">
        <div data-testid="output" className="w-full leading-[80px] bg-zinc-500 text-white text-right text-lime-500 text-3xl">
          {
            (!total && !operation && !next) ? 0
              : (
                <>
                  { total }
                  { operation }
                  { next }
                </>
              )
            }

        </div>
        <div className="leading-[80px] text-center bg-slate-200">
          {calculatorEl.map((item, i) => (
            (item.length === 4) ? (
              // eslint-disable-next-line react/no-array-index-key
              <div className="grid grid-cols-4" key={i}>
                <button type="button" data-testid={item[0]} onClick={handleClick} className="cursor-pointer border-[1px] border-double border-amber-400 text-orange-900">{item[0]}</button>
                <button type="button" data-testid={item[1]} onClick={handleClick} className="cursor-pointer border-[1px] border-double border-amber-400 text-orange-900">{item[1]}</button>
                <button type="button" data-testid={item[2]} onClick={handleClick} className="cursor-pointer border-[1px] border-double border-amber-400 text-orange-900">{item[2]}</button>
                <button type="button" data-testid={item[3]} onClick={handleClick} className="cursor-pointer bg-black text-orange-300 border-[1px] border-double border-amber-400">{decodeHTMLEntities(item[3])}</button>
              </div>
            ) : (
              // eslint-disable-next-line react/no-array-index-key
              <div className="grid grid-cols-4" key={i}>
                <button type="button" data-testid={item[0]} onClick={handleClick} className="cursor-pointer col-span-2 text-center border-[1px] border-double border-amber-400">{item[0]}</button>
                <button type="button" data-testid={item[1]} onClick={handleClick} className="cursor-pointer border-[1px] border-double border-amber-400">{item[1]}</button>
                <button type="button" data-testid={item[2]} onClick={handleClick} className="cursor-pointer bg-yellow-600 border-[1px] border-double border-amber-400">{item[2]}</button>
              </div>
            )

          ))}

        </div>
      </section>
    </>
  );
};

export default Calculator;
