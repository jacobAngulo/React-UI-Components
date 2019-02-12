import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay />
      <div className="btns">
        <div className="clear-and-numbers-btns">
          {/* numbers & clear */}
          <NumberButton content="clear" />
          <NumberButton content="7" />
          <NumberButton content="8" />
          <NumberButton content="9" />
          <NumberButton content="4" />
          <NumberButton content="5" />
          <NumberButton content="6" />
          <NumberButton content="1" />
          <NumberButton content="2" />
          <NumberButton content="3" />
          <NumberButton content="0" />
        </div>
        <div className="action-btns">
          {/* action btns */}
          <ActionButton content={"\u00F7"} />
          <ActionButton content={"\u00D7"} />
          <ActionButton content={"\u2212"} />
          <ActionButton content={"+"} />
          <ActionButton content={"="} />
        </div>
      </div>
    </div>
  );
};

export default App;
