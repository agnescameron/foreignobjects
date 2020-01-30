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
      console.log(ip);
      this.setState({ ip : ip })
    }).catch(error => {
      console.log(error);
    })

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
            
  }

  render() {
     console.log("ipData is", this.state.ipData)
    return (
 <div className="ipAddress">
            {this.state.ipData.city}... {this.state.ipData.region}... {this.state.ipData.country}... {this.state.ipData.longitude}&deg; N, {this.state.ipData.latitude}&deg; E, {this.state.ipData.org} 
    </div>
    );
  }
}
