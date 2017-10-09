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
        <h2>{this.state.bandwidthSentence}</h2>
        <h3>{this.state.rttSentence}</h3>
        <h1>{this.state.error}</h1>

        <style jsx>{`
          h3 {
            font-size: 1.3rem;
          }

          @media (min-width: 600px) {
            h1 {
              font-size: 2.5rem;
            }
            h2 {
              font-size: 2rem;
            }
            h3 {
              font-size: 1.5rem;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Index;