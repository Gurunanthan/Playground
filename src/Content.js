import React from 'react'
import './App.css';
import {useState} from 'react';
const Content = () => {
    const [count,setCount]=useState(1);
    // function countfunctionincrease() {
    //   if(whatway=='')
    //   {
    //     alert('the text field must not be empty')
    //   }
    //   setCount(count+1);
    // }
    // function countfunctiondecrease(){
    //   if(whatway=='')
    //   {
    //     alert('the text field must not be empty')
    //   }
    //   if(count<=0)
    //   {
    //     setCount(0);
    //   }
    //   else{
    //     setCount((count)-1);

    //   }
    // }
    const [whatway,setthatway]=useState('');
    const inwhatwayyouwantittoincrease=(event)=>
    {
      
      setthatway(event.target.value);
    }
    const reset=()=>
    {
      setthatway('');
      setCount(0);
      document.getElementById('size').value='';
      
    }
    const size=(event)=>
    {
      setCount(event.target.value)
    }
  return (
    <div className='App Container' style={{marginTop:'10%',background:'grey'}}>
      <h1>element size</h1>
        <h2 style={{padding:'20px'}}>Select the size of the element</h2>
        <input onChange={size} type='number' id='size'></input>
        <h2 style={{padding:'20px'}}>how the sizing works in css for a element</h2>
        <input value={whatway} onChange={inwhatwayyouwantittoincrease}></input>
        <br></br>
        <h3 style={{fontSize:`${count}${whatway}`,padding:'20px'}}> the size of the paragraph is {count} {whatway} </h3>
        {/* <button className='btn btn-success' onClick={countfunctionincrease}>hit me to increase</button>
        <button className='btn btn-primary' type='button' onClick={countfunctiondecrease}>hit me to decrease</button> */}
        <button className='btn btn-danger' onClick={reset}>reset</button>
    </div>
  )
}

export default Content