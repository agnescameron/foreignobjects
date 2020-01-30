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

  // used for making IP API call and avoiding CORS error
    const cors = "https://cors-anywhere.herokuapp.com/"
    const ipinfo = "https://ipapi.co/"

    publicIP()
    .then(ip => {
      // console.log("ip");
      // '47.122.71.234'
      this.setState({ ip : ip })
    })
    // uses iplocation to fetch ipapi IP location API data
        .then(
            fetch(cors + ipinfo + this.state.ip + '/json')
            // return ipresponse.json from API and set it to ipData prop
            .then(
              (ipresponse) => {
            return ipresponse.json();
            }).then(
              (ipresponse) => {
              // console.log(ipresponse);
              this.setState({ ipData : ipresponse });
              })
            )
    .catch(error => {
      console.log(error);
      // 'Unable to get IP address.'
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