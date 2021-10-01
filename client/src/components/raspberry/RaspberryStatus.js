import { useContext, useEffect } from 'react';
import StatusContext from '../../context/StatusContext';
import Thermometer from 'react-thermometer-component';

const RaspberryStatus = () => {
  const statusCtx = useContext(StatusContext);

  return (
    <Thermometer
      theme='dark'
      value={`${statusCtx.temp}`}
      max='100'
      steps='1'
      format='°C'
      size='small'
      height='300'
    />
  );
};

export default RaspberryStatus;
