import React from 'react';
import './Components.css';

export default class Hogs extends React.Component{

render() {
  const hogs = this.props.hogs;
  // console.log(hogs)
  return (
      <span className="ipAddress">
        An ounce of gold today costs only ${hogs ? hogs.dataset.data[0][1] : "no hogs"} today! {/* down ${ Math.abs(hogs.dataset.data[0][1] - hogs.dataset.data[7][1]).toFixed(2) } since last week.*/} Always believe in your soul...

        {/* This time last week it was ${hogs ? hogs.dataset.data[7][1] : "no hogs"}.
        This time last year it was ${hogs ? hogs.dataset.data[365][1] : "no hogs"}.*/}
      </span>
    );
  }
}
