import React from 'react';

const StatusContext = React.createContext({
  temp: 0,
  getTemp: () => {},
});

export default StatusContext;
