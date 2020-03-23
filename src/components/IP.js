import React from 'react';
import './Components.css';
import publicIP from 'react-native-public-ip';
import Hogs from '../components/Hogs';

export default class IP extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
          ip: '',
          ipData: '',
          hogs: '',
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

  fetch("https://www.quandl.com/api/v3/datasets/LBMA/GOLD")
  .then (
  (quandl) => {
    return quandl.json();
  }).then (
  (quandl) => {
  // console.log ("hog data shows", quandl)
  this.setState ({ hogs : quandl })
  })
}

render() {
     const ipData = this.state.ipData;
     // console.log(this.state.hogs);
     // console.log("ipData is", ipData)  Hog lows: {hogs.}... Hog changes: {hogs.}... Hog value:{hogs.}...
    return (
  <div className="ipAddress">
          Another fine day to be quarantined {ipData.city && "in " + ipData.city}! {this.state.hogs && <Hogs hogs={this.state.hogs} /> } {/* Population {ipData.country_population}... {ipData.longitude}&deg; N, {ipData.latitude}&deg; E, {ipData.org} */}
    </div>
    );
  }
}
