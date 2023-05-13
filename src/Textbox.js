import React, { useState } from 'react';
import './App.css';

const Textbox = () => {
  const [input, setInput] = useState('');

  const eventHandle = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className='App container' style={{marginTop:'10%',background:'grey'}}>
     <h2>Color checker</h2> <br />
      <br></br>
      <input placeholder={input} onChange={eventHandle}></input>
      <p style={{ backgroundColor: input, height: '100px', width: '100px', display: 'block', margin: 'auto' ,marginTop:'10px',border:'1px solid black'}}></p>
      <br></br>
      <p>{input}</p>
    </div>
  );
};

export default Textbox;
