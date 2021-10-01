import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import RaspberryStatus from './RaspberryStatus';

const Raspberry = () => {
  return (
    <Card
      variant='outlined'
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 1,
        p: 2,
        maxWidth: 300,
        backgroundColor: 'gray',
        opacity: '90%',
      }}
    >
      <CardContent>
        <Typography align='center' variant='h5' sx={{ color: 'black' }}>
          Raspberry
        </Typography>
        <RaspberryStatus />
      </CardContent>
    </Card>
  );
};

export default Raspberry;
