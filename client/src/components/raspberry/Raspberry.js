import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import RaspberryTemperature from './RaspberryTemperature';
import RaspberryMemory from './RaspberryMemory';
const Raspberry = () => {
  return (
    <Card
      sx={{
        width: '30%',
        borderWidth: '0',
        border: 'none',
        boxShadow: 'none',
        backgroundColor: 'transparent',
      }}
    >
      <CardContent
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <RaspberryTemperature />
      </CardContent>
      <CardContent
        sx={{
          width: '100%',
          color: 'white',
          alignItem: 'center',
        }}
      >
        <Typography variant='subtitle1'>Memory</Typography>
        <RaspberryMemory />
      </CardContent>
    </Card>
  );
};

export default Raspberry;
