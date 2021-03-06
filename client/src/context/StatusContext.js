import React from 'react';

const StatusContext = React.createContext({
  temp: 0,
  mem: 0,
  getTemp: () => {},
  getMemUsage: () => {},
});

export default StatusContext;
