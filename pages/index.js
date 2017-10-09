import React from 'react';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      connectionSentence: '',
      rttSentence: '',
      error: '',
      bandwidthSentence: '',
    };
  }

  componentDidMount() {
    const updateConnectionInfo = () => {
      if ('connection' in navigator) {
        const network = navigator.connection;

        const { type, downlink, rtt } = network;

        const connections = [
          { type: 'wifi', name: 'WiFi' },
          { type: 'bluetooth', name: 'Bluetooth' },
          { type: 'cellular', name: 'Cellular' },
          { type: 'wimax', name: 'WiMAX' },
          { type: 'ethernet', name: 'Ethernet' },
          { type: 'other', name: 'magic' },
        ];

        const connection = connections.find(data => type === data.type);

        let connectionSentence = '';
        if (type === 'unknown') {
          connectionSentence = "I have no idea how you're online";
        } else if (type === 'none') {
          connectionSentence = 'You are not connected to the internet';
        } else {
          connectionSentence = `You are connected via ${connection.name}`;
        }

        const bandwidthSentence = `Your bandwidth is ${downlink}mbps`;
        const rttSentence = `Your ping is ${rtt}ms`;
        this.setState({ connectionSentence, bandwidthSentence, rttSentence });
        navigator.connection.addEventListener('change', updateConnectionInfo);
      } else {
        const error = "Your browser doesn't support navigator.connection 🙃";
        this.setState({ error });
      }
    };
    updateConnectionInfo();
  }

  render() {
    return (
      <div>
        <h1>{this.state.connectionSentence}</h1>
        <p>{this.state.bandwidthSentence}</p>
        <p>{this.state.rttSentence}</p>
        <p>{this.state.error}</p>
      </div>
    );
  }
}

export default Index;
