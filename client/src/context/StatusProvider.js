import { useState } from 'react';
import StatusContext from './StatusContext';

const StatusProvider = (props) => {
  const [temp, setTemp] = useState(0);

  const getTempHandler = () => {
    setTemp(0);
  };

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
