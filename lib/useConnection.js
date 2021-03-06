// @flow
// $FlowFixMe: these arent typed yet
import { useEffect, useState } from 'react';

const useConnection = (): {
  downlink?: number,
  effectiveType?: string,
  rtt?: number,
  error?: string,
} => {
  if (!('connection' in navigator)) {
    return { error: "Your browser doesn't support navigator.connection 🙃" };
  }

  const [{ downlink, effectiveType, rtt }, setState] = useState(
    window.navigator.connection
  );

  const updateConnectionInfo = () => {
    const { onLine: online } = navigator;
    if (downlink > 0 && rtt > 0 && online) {
      // we're online 😎
    } else if (downlink === 0 || rtt === 0 || !online) {
      setState({
        effectiveType: 'offline',
      });
    } else {
      setState({
        effectiveType: 'unknown',
      });
    }
  };

  useEffect(() => {
    updateConnectionInfo();
    window.navigator.connection.addEventListener(
      'change',
      updateConnectionInfo
    );
    return () => {
      window.navigator.connection.removeEventListener(
        'change',
        updateConnectionInfo
      );
    };
  }, []);

  return {
    effectiveType,
    downlink,
    rtt,
  };
};

export default useConnection;
