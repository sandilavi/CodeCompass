// material-ui
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const HomePage = () => {

  // const theme = useTheme();

  return (
    <MainCard title="Dashboard">
      <Typography variant='h3' align='center' marginBottom='20px' sx={{ fontWeight: 'medium' }} >
        Select a Programming Language
      </Typography>
      <Box display='flex' alignItems='center' sx={{ boxShadow: 3, borderRadius: 2 }} >
        <Card sx={{ maxWidth: 345, width: 200, mt: '9px', mb: '9px', ml: '4px' }} onClick={() => { console.log('onClick'); }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150 px"
              image={require('assets/languageLogos/icons8-java-480.png')}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="div" align='center'>
                Java
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, width: 200, mt: '9px', mb: '9px', ml: '4px' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150 px"
              image={require('assets/languageLogos/python.png')}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="div" align='center'>
                Python
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

      </Box>

      <Typography variant="body1">
      </Typography>
    </MainCard>
  )
};

export default HomePage;
