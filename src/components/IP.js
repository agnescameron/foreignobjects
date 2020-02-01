import React from 'react';
import './Components.css';
import publicIP from 'react-native-public-ip';

export default class IP extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
          ip: '',
          ipData: '',
    }
  }

componentDidMount(){

  const cors = "https://cors-anywhere.herokuapp.com/"
  const ipinfo = "https://ipapi.co/"

  publicIP()
  .then(ip => {
    // console.log(ip);
    // '47.122.71.234'
    this.setState({ ip : ip });
    // console.log ("the newly found ip is ", this.state.ip);
    fetch(cors + ipinfo + ip + '/json')
    .then (
    (ipresponse) => {
      // console.log("initiated second bit")
      return ipresponse.json();
    }).then (
    (ipresponse) => {
      // console.log("initiated third bit, it's", ipresponse, "hopefully ends here!")
      this.setState({ipData : ipresponse})
      })
    })
}

render() {
     const ipData = this.state.ipData;
     // console.log("ipData is", ipData)  Hog lows: {hogs.}... Hog changes: {hogs.}... Hog value:{hogs.}...
    return (
  <div className="ipAddress">
            {ipData.city}... {ipData.country_name}... Population {ipData.country_population}... { ipData.in_eu ? "In the EU..." : "Not in the EU..." } {ipData.longitude}&deg; N, {ipData.latitude}&deg; E, {ipData.org} 
    </div>
    );
  }
}
