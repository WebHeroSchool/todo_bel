import logo from './logo.svg';
import './App.css';
import {count, lenght} from './number.js';

const index = 27;
const name = 'Санкт-Петербург';
const sum = 10+5;
let com;
if (sum==15) com= true;
let elem = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         <p style={{
          color: 'red'
          }}>
         Hello </p>
         <p>
          Вывод числа: {index}
         </p>
         <p> 
          Вывод значения переменной : {name}
         </p> 
         <p>
           Вывод результата арифметической операции: {sum}
         </p>
         <p>
            Вывод результата логической операции: {com && 'true'}
         </p> 
         <p> 
           Использования тернарного условия: {elem ? 'elem true' : 'elem false'}
         </p>
         <p>
           {undefined} {null} {false} {true} 
         </p>
         <p> 
           {count * lenght}
         </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
