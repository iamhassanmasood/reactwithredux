import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux'
class Counter extends Component {

  render () {

        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl 
                label="Increment" 
                clicked={this.props.onIncrementCounter} />
                <CounterControl 
                label="Decrement" 
                clicked={this.props.onDecrementCounter}  />
                <CounterControl 
                label="Add 5" 
                clicked={this.props.onFiveIncrementCounter}  />
                <CounterControl 
                label="Subtract 5" 
                clicked={this.props.onFiveDecrementCounter}  />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        ctr : state.counter
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onIncrementCounter : () => dispatch ({ type: "INCREMENT_COUNTER"}),
        onDecrementCounter : () => dispatch ({ type: "DECREMENT_COUNTER"}),
        onFiveIncrementCounter : () => dispatch ({ type: "5INCREMENT_COUNTER"}),
        onFiveDecrementCounter : () => dispatch ({ type: "5DECREMENT_COUNTER", value: 5})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);