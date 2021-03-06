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

// Adding div to content //

import React from 'react';
import ReactDom from 'react-dom';


function Message () {
 return (<div>Hello world!</div>
 
 );

 };

ReactDom.render(<Message/>, document.getElementById('root'));

// Adding more contents under div //

import React from 'react';
import ReactDom from 'react-dom';


function Message () {
 return (<div>
   <h1>ARE YOU READY</h1>
   <ul>
     <li>
       <a href='#'>Link HERE</a>
     </li>
   </ul>
   
   </div>
 
 );

 };

ReactDom.render(<Message/>, document.getElementById('root'));

// Replace div with React.Fragment //
function Message () {
 return (<React.Fragment>
   <h1>ARE YOU READY</h1>
   <ul>
     <li>
       <a href='#'>Link HERE</a>
     </li>
   </ul>
   
   </React.Fragment>
 
 );

 };


ReactDom.render(<Message/>, document.getElementById('root'));

// React.Fragment == empty <> //
import React from 'react';
import ReactDom from 'react-dom';


function Message () {
 return (<>
   <h1>ARE YOU READY</h1>
   <ul>
     <li>
       <a href='#'>Link HERE</a>
     </li>
   </ul>
   
   </>
 
 );

 };


ReactDom.render(<Message/>, document.getElementById('root'));

// Always use ClassName instead of class //

import React from 'react';
import ReactDom from 'react-dom';


function Message () {
 return (<div className=''>
   <h1>ARE YOU READY</h1>
   <ul>
     <li>
       <a href='#'>Link HERE</a>
     </li>
   </ul>
   
   </div>
 
 );

 };


ReactDom.render(<Message/>, document.getElementById('root'));

// Nested component //
import React from 'react';
import ReactDom from 'react-dom';


function Message () {
 return (<div>
    <Talk/>
   <p>Almost over!</p>
   
   </div>
 
 );

 };

 const Talk = () => <h1>ARE YOU READY</h1>


ReactDom.render(<Message/>, document.getElementById('root'));

// Nested component //

import React from 'react';
import ReactDom from 'react-dom';


function BookList () {
 return ( 
 <section>
   <Book/>
   <Book/>
   <Book/>
   <Book/>
   <Book/>
 </section>
 );

}

const Book = () => {
  return <article>this is a train</article>;
};

ReactDom.render(<BookList/>, document.getElementById('root'));

// Book App //
import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';


function BookList () {
 return ( 
 <section className='booknet'>
   <Book/>
   <Book/>
   <Book/>
 </section>
 );

}

const Book = () => {
  return <article className='netbook'>
    <Image></Image>
    <Title />
    <Author />
  </article>;
};

const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL200_SR200,200_.jpg' alt=''/>

const Title = () => <h1>Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones</h1>;

const Author = () => <p>James Clear</p>;

ReactDom.render(<BookList/>, document.getElementById('root'));

// CSS style  //
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Courier New', Courier, monospace;
    background: chartreuse;
    color: black;
}

h1{
    color: brown;
}

p{
    color: cornflowerblue;
}

.booknet{
    width: 90vw;
    max-width: 1170px;
    margin: 5rem auto;
    display: grid;
    gap: 2rem;
}

@media screen and (min-width:768px) {
    .booknet{
        grid-template-columns: repeat(3, 1fr);
    }
    
}

.netbook{
    background: cornsilk;
    border-radius: 1px solid black;
    padding: 1rem 2rem;
}


// Props with console on Nested components //
import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

//Setup vars
const author = 'James Clear';
const title = 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones';
const img = 'https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL200_SR200,200_.jpg';


function BookList () {
 return ( 
 <section className='booknet'>
   <Book job='developer'/>
   <Book title='randon title' number={44}/>
 </section>
 );

}

const Book = (props) => {
  console.log(props);
  return <article className='netbook'>
<img src={img} alt=''/>
<h1>{title}</h1>
<p>{author}</p>
{console.log(props)}

</article>

};

ReactDom.render(<BookList/>, document.getElementById('root'));

//Props and console part 2//
mport React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

//Setup vars
const author = 'James Clear';
const title = 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones';
const img = 'https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL200_SR200,200_.jpg';


function BookList () {
 return ( 
 <section className='booknet'>
   <Book job='developer'/>
   <Book title='random title' number={44}/>
 </section>
 );

}

const Book = (props) => {
  return <article className='netbook'>
<img src={img} alt=''/>
<h1>{title}</h1>
<h2>{author}</h2>
<p>{props.job}</p>
<p>{props.title}</p>
<p>{props.number}</p>
</article>


};

ReactDom.render(<BookList/>, document.getElementById('root'));

// Props with Array //
import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';
const books = [

 {
  img: 'https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL200_SR200,200_.jpg',
  title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
  author: 'James Clear',

 },

{
  img: 'https://images-na.ssl-images-amazon.com/images/I/51WWHYPinjL._SX321_BO1,204,203,200_.jpg',
  title: 'The Seven Husbands of Evelyn Hugo',
  author: 'Taylor Jenkins',
},

];

const names = ['john', 'peter', 'Susan']
const newName = names.map((name)=> {
  return <h1>{name}</h1>
});
  console.log(newName);

function BookList () {
 return <section className='booknet'>{newName}</section>;

}

const Book = (props) => {
  const {img, title, author } = props;

  return <article className='netbook'>

</article>


};

ReactDom.render(<BookList/>, document.getElementById('root'));

// MAP METHOD //
import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';
const books = [

 {
  img: 'https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL200_SR200,200_.jpg',
  title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
  author: 'James Clear',

 },

{
  img: 'https://images-na.ssl-images-amazon.com/images/I/51WWHYPinjL._SX321_BO1,204,203,200_.jpg',
  title: 'The Seven Husbands of Evelyn Hugo',
  author: 'Taylor Jenkins',
},

];

function BookList () {
 return <section className='booknet'>{books.map((book) => {
   const {img, title, author} = book;
   return <div>
     <h3>{title}</h3>
     <h6>{author}</h6>
   </div>
 })}</section>;

}

const Book = (props) => {
  const {img, title, author } = props;

  return <article className='netbook'>

</article>


};

ReactDom.render(<BookList/>, document.getElementById('root'));

// KEY PROPS - AUTOMATE //
import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';
const books = [

 {
  img: 'https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL200_SR200,200_.jpg',
  title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
  author: 'James Clear',

 },

{
  img: 'https://images-na.ssl-images-amazon.com/images/I/51WWHYPinjL._SX321_BO1,204,203,200_.jpg',
  title: 'The Seven Husbands of Evelyn Hugo',
  author: 'Taylor Jenkins',
},

];

function BookList () {
 return <section className='booknet'>{books.map((book) => {
   const {img, title, author} = book;
   return <Book book={book}></Book>;
 })}
 </section>

}

const Book = (props) => {
  const {img, title, author } = props.book;

  return <article className='book'>
    <img src={img} alt='' />
    <h1>{title}</h1>
    <h3>{author}</h3>

</article>

};

ReactDom.render(<BookList/>, document.getElementById('root'));

// CLICK AND EVENTS ON REACT //
mport React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';
const books = [

 {
  img: 'https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL200_SR200,200_.jpg',
  title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
  author: 'James Clear',

 },

{
  img: 'https://images-na.ssl-images-amazon.com/images/I/51WWHYPinjL._SX321_BO1,204,203,200_.jpg',
  title: 'The Seven Husbands of Evelyn Hugo',
  author: 'Taylor Jenkins',
},

];

function BookList () {
 return <section className='booknet'>{books.map((book) => {
   const {img, title, author} = book;
   return <Book book={book}></Book>;
 })}
 </section>

}

const Book = (props) => {
  const {img, title, author } = props.book;
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert ('Hello world');
  };

  return <article className='book'>
    <img src={img} alt='' />
    <h1>{title}</h1>
    <h3>{author}</h3>
    <button type='button' onClick={clickHandler}>Reference example</button>

</article>

};

ReactDom.render(<BookList/>, document.getElementById('root'));


// EVENT HANDLER>>>>>> ONMOUSEOVER //
import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';
const books = [

 {
  img: 'https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL200_SR200,200_.jpg',
  title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
  author: 'James Clear',

 },

{
  img: 'https://images-na.ssl-images-amazon.com/images/I/51WWHYPinjL._SX321_BO1,204,203,200_.jpg',
  title: 'The Seven Husbands of Evelyn Hugo',
  author: 'Taylor Jenkins',
},

];

function BookList () {
 return <section className='booknet'>{books.map((book) => {
   const {img, title, author} = book;
   return <Book book={book}></Book>;
 })}
 </section>

}

const Book = (props) => {
  const {img, title, author } = props.book;
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert ('My first event');
  };

  return <article className='book' onMouseOver={() =>{
    console.log('Welcome to my page')
  }}>
    <img src={img} alt='' />
    <h1>{title}</h1>
    <h3>{author}</h3>
    <button type='button' onClick={clickHandler}>Reference example</button>

</article>

};

ReactDom.render(<BookList/>, document.getElementById('root'));

// EXport in ReactJs by creating another folder //

mport React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

import {books} from './books';

function BookList () {
 return <section className='booknet'>{books.map((book) => {
   const {img, title, author} = book;
   return <Book book={book}></Book>;
 })}
 </section>

}

const Book = (props) => {
  const {img, title, author } = props.book;
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert ('My first event');
  };

  return <article className='book' onMouseOver={() =>{
    console.log('Welcome to my page')
  }}>
    <img src={img} alt='' />
    <h1>{title}</h1>
    <h3>{author}</h3>
    <button type='button' onClick={clickHandler}>Reference example</button>

</article>

};

ReactDom.render(<BookList/>, document.getElementById('root'));

/*----------------------*/
export const books = [

    {
     img: 'https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL200_SR200,200_.jpg',
     title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
     author: 'James Clear',
   
    },
   
   {
     img: 'https://images-na.ssl-images-amazon.com/images/I/51WWHYPinjL._SX321_BO1,204,203,200_.jpg',
     title: 'The Seven Husbands of Evelyn Hugo',
     author: 'Taylor Jenkins',
   },
   
   ];

// Export part 2 //
import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

import {books} from './books';
import Book from './Book';

function BookList () {
 return <section className='booknet'>{books.map((book) => {
   const {img, title, author} = book;
   return <Book book={book}></Book>;
 })}
 </section>

}


ReactDom.render(<BookList/>, document.getElementById('root'));

/*-----------Export from Book.js----------*/
import React from 'react';

const Book = (props) => {
    const {img, title, author } = props.book;
    // attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler = () => {
      alert ('My first event');
    };
  
    return <article className='book' onMouseOver={() =>{
      console.log('Welcome to my page')
    }}>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h3>{author}</h3>
      <button type='button' onClick={clickHandler}>Reference example</button>
  
  </article>
  
  };

export default Book
