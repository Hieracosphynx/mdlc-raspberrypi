import { useState, useCallback } from 'react';
import StatusContext from './StatusContext';

const StatusProvider = (props) => {
  const [temp, setTemp] = useState(0);
  const [memUsage, setMemUsage] = useState(0);
  const [memPercentage, setMemPercentage] = useState(0);
  const [sizeType, setSizeType] = useState('');
  
  const getTempHandler = useCallback(async () => {
    try {
      const response = await fetch(
        'http://192.168.1.100:8080/api/raspberry/temperature'
      );
      if (!response.ok) {
        throw new Error('No data');
      }

      const data = await response.json();
      setTemp(data.temp);
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  const getSizeAndPercent = ({mem, type}) => {
    const MAX_MEMORY = 7.71 // GiB
    switch(type) {
      case "GIGA":
        const memPercentGiga = parseFloat((mem/MAX_MEMORY)*100).toFixed(2);
        setMemPercentage(memPercentGiga);
        setSizeType("GiB");
        break;
      case "MEGA":
        const memPercentMega = parseFloat(((mem/1024)/MAX_MEMORY) * 100);
        setMemPercentage(memPercentMega);
        setSizeType("MiB");
        break;
      default:
        break;
    }
  }

  // TEMPORARY SOLUTION

  const getMemUsageHandler = useCallback(async () => {
    try {
      const response = await fetch(
        'http://192.168.1.100:8080/api/raspberry/memory'
      );

      if (!response.ok) {
        throw new Error('No data');
      }

      const data = await response.json();

      getSizeAndPercent(data);
      setMemUsage(parseFloat(data.mem).toFixed(2));
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  const statusValue = {
    temp: temp,
    mem: memUsage,
    memPercent: memPercentage,
    type: sizeType,
    getTemp: getTempHandler,
    getMemUsage: getMemUsageHandler,
  };

  return (
    <StatusContext.Provider value={statusValue}>
      {props.children}
    </StatusContext.Provider>
  );
};

export default StatusProvider;
