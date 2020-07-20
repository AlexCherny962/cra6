import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(1);
  const [countTen, setCountTen] = useState(10);
  const [countRand, setCountRand] = useState(0);

  const addOne = () => {setCount(count + 1);}
  const addTen = () => {setCountTen(countTen + 10)}

  const minusOne = () => {setCount(count - 1);}
  const minusTen = () => {setCountTen(countTen - 10);}

  const addRand = () => {setCountRand(countRand+Math.trunc((Math.random())*10));}
  const minusRand = () => {setCountRand(countRand-Math.trunc((Math.random())*10));}

  const clearAll = () => { // взято с https://olgabresheva.github.io/counter/
    setCount(0);
    setCountTen(0);
    setCountRand(0);
  }

  return (
      <div align="center">
        <p/>
        <div>
          <button onClick={addOne}> Add one number</button> {/* две кнопки для +- 1*/}
          {" "}{count}{" "}
          <button onClick={minusOne}> Minus one number</button>
        </div>

        <div>
          <button onClick={addTen}> Add ten number</button> {/* две кнопки для +- 10*/}
          {" "}{countTen}{" "}
          <button onClick={minusTen}> Minus ten number</button>
        </div>

        <div>
          <button onClick={addRand}> Add random number</button> {/* две кнопки для +- случайного числа*/}
          {" "}{countRand}{" "}
          <button onClick={minusRand}> Minus random number</button>
        </div>

        <button onClick={clearAll}>Reset all counters to zero </button>

      </div>
  );
}
export default App;