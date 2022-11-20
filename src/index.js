import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Cards from "./Cards"
import './App.css';
import Sdata from './Sdata';


function ncard(val){
  return (
    <Cards 
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
  />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

       <h1 className='heading__style'>Lists of My Favorite Series</h1>
        {Sdata.map(ncard)}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
