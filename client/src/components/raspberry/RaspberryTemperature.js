import { useState, useContext, useEffect } from 'react';
import StatusContext from '../../context/StatusContext';
import Thermometer from 'react-thermometer-component';

const RaspberryStatus = () => {
  const [isInitial, setIsInitial] = useState(false);
  const statusCtx = useContext(StatusContext);
  const { temp, mem, getTemp, getMemUsage } = statusCtx;

  useEffect(() => {
    if (!isInitial) {
      getTemp();
      setIsInitial(true);
    }
    const intervalId = setInterval(() => {
      getTemp();
      getMemUsage();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [temp, getTemp, isInitial]);

  return (
    <Thermometer
      theme='dark'
      value={`${temp}`}
      max='100'
      steps='2'
      format='°C'
      size='small'
      height='300'
    />
  );
};

export default RaspberryStatus;
