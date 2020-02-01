import React from 'react';
import './Components.css';
import publicIP from 'react-native-public-ip';
import iplocation from "iplocation";

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
  const ip = this.state.ip

  publicIP()
  .then(ip => {
    console.log(ip);
    // '47.122.71.234'
    this.setState({ ip : ip });
    console.log ("the newly found ip is ", this.state.ip);
    fetch(cors + ipinfo + ip + '/json')
    .then (
    (ipresponse) => {
      console.log("initiated second bit")
      return ipresponse.json();
    }).then (
    (ipresponse) => {
      console.log("initiated third bit, it's", ipresponse, "hopefully ends here!")
      this.setState({ipData : ipresponse})
      })
    })
}

render() {
     const ipData = this.state.ipData;
     // console.log("ipData is", ipData)
    return (
 <div className="ipAddress">
            {this.state.ipData.city}... {this.state.ipData.region}... {this.state.ipData.country}... {this.state.ipData.longitude}&deg; N, {this.state.ipData.latitude}&deg; E, {this.state.ipData.org} 
    </div>
    );
  }
}
