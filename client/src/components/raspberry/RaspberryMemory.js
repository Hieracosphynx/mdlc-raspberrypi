import { Fragment, useState, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import StatusContext from '../../context/StatusContext';

const RaspberryMemory = () => {
  const statusCtx = useContext(StatusContext);
  const { mem, type, getMemUsage } = statusCtx;
  const [isInitial, setIsInitial] = useState(false);
  let memPercentage = parseFloat(((mem / 7.71) * 100).toFixed(2));

  useEffect(() => {
    if (!isInitial) {
      getMemUsage();
      setIsInitial(true);
    }
    const intervalId = setInterval(() => {
      getMemUsage();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [getMemUsage, isInitial]);


  return (
    <Fragment>
      <Box
        sx={{
          width: '90%',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='caption' sx={{}}>
          Usage: {`${mem}${type}`}
        </Typography>
        <Typography variant='caption' sx={{}}>
          7.71GiB
        </Typography>
      </Box>
      <LinearProgress
        variant='determinate'
        value={memPercentage}
        sx={{
          width: '90%',
        }}
      />
    </Fragment>
  );
};

export default RaspberryMemory;
