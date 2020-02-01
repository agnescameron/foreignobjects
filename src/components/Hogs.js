import React from 'react';
import './Components.css';

export default class Hogs extends React.Component{

render() {
  const hogs = this.props.hogs;
  console.log(hogs)
  return (
    <a href={ "https://www.quandl.com/data/" + hogs.dataset.dataset_code + "/" + hogs.dataset.database_code}>
      <div className="ipAddress">
        Hog for the day: {hogs ? hogs.dataset.data[0][0] : "no hogs"}... 
        Hog lows: {hogs ? hogs.dataset.data[0][2] : "no hogs"}... 
        Hog changes: {hogs ? hogs.dataset.data[0][3] : "no hogs"}... 
        {hogs ? hogs.dataset.name : "no hogs"}: {hogs ? hogs.dataset.data[0][5] : "no hogs"}...
      </div>
    </a>
    );
  }
}
