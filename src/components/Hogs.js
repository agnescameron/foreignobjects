import React from 'react';
import './Components.css';

export default class Hogs extends React.Component{

render() {
  const quandl = this.props.hogs;
  // console.log(hogs)
  return (
      <span className="ipAddress">
        An ounce of gold today costs {quandl ? "only $" + quandl.dataset.data[0][1] + "!" : "more than you could imagine..."} {/* down ${ Math.abs(hogs.dataset.data[0][1] - hogs.dataset.data[7][1]).toFixed(2) } since last week.*/} <a className="App-link" href="https://www.youtube.com/watch?v=ntG50eXbBtc">Always believe in your soul...</a>

        {/* This time last week it was ${hogs ? hogs.dataset.data[7][1] : "no hogs"}.
        This time last year it was ${hogs ? hogs.dataset.data[365][1] : "no hogs"}.*/}
      </span>
    );
  }
}
