import React from 'react';
import './Components.css';

export default class Ticker extends React.Component{
// counter, state stores count
  
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.increment(),
      5000
    );
  }

  increment() {
    this.setState({
      currentCount: (this.state.currentCount + 1) % 5
      });
    }
  

  render() {
    // const className = this.props.hovering ? 'Top' : 'hidden Top';
    const textList = ['text one', 'text two', 'text three', 'text four', 'text five'];
    return (
      <div className="Ticker">
          <div>{textList[this.state.currentCount]}</div>
        </div>
    );
  }

}

