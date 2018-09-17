import React, { Component } from 'react';
import ConnectionType from '../components/ConnectionType';
import Bandwidth from '../components/Bandwidth';
import RTT from '../components/Rtt';
import { H1 } from '../components/Type';

class Index extends Component {
  state = {
    rtt: null,
    bandwidth: null,
    connection: null,
    error: null,
  };

  effectiveTypes = [
    { type: 'wifi', name: 'WiFi' },
    { type: 'bluetooth', name: 'Bluetooth' },
    { type: 'cellular', name: 'Cellular' },
    { type: 'wimax', name: 'WiMAX' },
    { type: 'ethernet', name: 'Ethernet' },
    { type: 'other', name: 'magic' },
    { type: 'offline', name: 'offline' },
    { type: 'slow-2g', name: '2G' },
    { type: '2g', name: '2G' },
    { type: '3g', name: '3G' },
    { type: '4g', name: '4G' },
  ];

  componentDidMount = () => {
    if ('connection' in navigator) {
      this.updateConnectionInfo();
      navigator.connection.addEventListener(
        'change',
        this.updateConnectionInfo
      );
      return null;
    }

    this.setState({
      error: "Your browser doesn't support navigator.connection 🙃",
    });
    return null;
  };

  componentWillUnmount = () => {
    navigator.connection.removeEventListener(
      'change',
      this.updateConnectionInfo
    );
  };

  updateConnectionInfo = () => {
    const { connection } = window.navigator;

    const { downlink, rtt, effectiveType } = connection;

    const connectionType = this.effectiveTypes.find(
      ({ type }) => type === effectiveType.toLowerCase()
    );

    this.setState({
      bandwidth: downlink,
      rtt,
      connection: connectionType.name,
    });
  };

  render() {
    const { connection, bandwidth, rtt, error } = this.state;

    if (error) {
      return <H1>{error}</H1>;
    }

    return (
      <>
        <ConnectionType connection={connection} />
        <Bandwidth bandwidth={bandwidth} />
        <RTT rtt={rtt} />
      </>
    );
  }
}

export default Index;
