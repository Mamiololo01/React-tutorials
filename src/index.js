import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// To add h2 tag on ReactJs //
import React from 'react';
import ReactDom from 'react-dom'


function Greeting () {
  return <h2>This is my first component!</h2>;

}

ReactDom.render(<Greeting/>, document.getElementById('root'));

import React from 'react';
import ReactDom from 'react-dom'


function Message () {
  return <h2>Y2022 is my year, everything will be fine!!</h2>;

}

ReactDom.render(<Message/>, document.getElementById('root'));

// Use JSX to add content instead of HTML//

import React from 'react';
import ReactDom from 'react-dom';


//function Message () {
// return <h1>Y2022 is my year, everything will be fine!!</h1>;

// }

const Message = () => {
  return React.createElement('h2', {}, 'Y2022 is my year, everything will be fine!!');
};

ReactDom.render(<Message/>, document.getElementById('root'));
