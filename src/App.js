import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.textInput = React.createRef();
    this.emailInput =React.createRef();
  }
  componentDidMount(){
    console.log("Reaference in componentDidMount" +React.createRef());
    this.textInput.current.focus();
  }
  render() {
    return (
      <div className="App">
       <Counter />
       
       <form>
          <label> Email:</label><br/>
            <input type= "text"/><br/>
          <label>Password</label><br/>
            <input type="text" ref = {this.textInput} />
          </form>
          
      </div>
    );
  }
}

export default App;
