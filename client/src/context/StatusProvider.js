import { useState, useCallback } from 'react';
import StatusContext from './StatusContext';

const StatusProvider = (props) => {
  const [temp, setTemp] = useState(0);

  const getTempHandler = useCallback(async () => {
    try {
      const response = await fetch('http://192.168.1.100:8080/api/raspberry/');
      if (!response.ok) {
        throw new Error('No data');
      }

      const data = await response.json();
      setTemp(data.temp);
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  const statusValue = {
    temp: temp,
    getTemp: getTempHandler,
  };

  return (
    <StatusContext.Provider value={statusValue}>
      {props.children}
    </StatusContext.Provider>
  );
};

export default StatusProvider;
