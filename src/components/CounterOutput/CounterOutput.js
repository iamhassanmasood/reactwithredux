import React from 'react';
import './CounterOutput.css';

const counterOutput =(props)=> {
    const classes = [];
    const value = props.value;
    if(value % 4 === 0)  {
      classes.push('COutput') 
    } else classes.push('CounterOutput')
    return (
       <div className={classes}>
          <strong className={classes}>Current Counter: {value}</strong>
       </div>
  )
}

export default counterOutput;