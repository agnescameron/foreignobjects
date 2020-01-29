import React from 'react';
import './Components.css';
import publicIP from 'react-native-public-ip';

export default class IP extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
          ip: '',
    }
  }

  componentDidMount(){

  publicIP()
    .then(ip => {
      console.log("ip");
      // '47.122.71.234'
      this.setState({ ip : ip })
    })
    .catch(error => {
      console.log(error);
      // 'Unable to get IP address.'
    });
}
  render() {
       const ip = this.state.ip;
      console.log("ip is", this.state.ip)
    return (
      <div className="ipAddress">
        {this.state.ip}
      </div>
    );
  }
}
