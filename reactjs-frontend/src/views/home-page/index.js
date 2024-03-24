// material-ui
import { Badge, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import AddReactionTwoToneIcon from '@mui/icons-material/AddReactionTwoTone';
import newbie from 'assets/images/users/new-bie.png';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
//import { useLocation } from 'react-router';
// ==============================|| SAMPLE PAGE ||============================== //

const HomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  
  const [statistics] = useState({
    plansCompleted: 3,
    archivements: 0,
    experience: 0
  });
  //const location = useLocation();
 // const data = location.state;

  const startQuiz = (lang) => {
    Swal.fire({
      title: 'Confirmation',
      text: `Start the Evaluation quiz for ${lang}`,
      icon: 'question',
      iconHtml: "<i class='fas fa-book-open'></i>",
      confirmButtonText: 'Start Quiz',
    }).then((result) => {
      if (result.isConfirmed) {
        if (lang === 'Java') {
          navigate('/quiz');
        }
        else {
          alert('Coming soon!');
        }
      }
    });
  }

  return (
    <MainCard title="Dashboard">
      <Typography variant='h3' align='center' marginBottom='20px' sx={{ fontWeight: 'medium' }} >
        Select a Programming Language
      </Typography>
      <Box display='flex' alignItems='center' justifyContent='center' sx={{ boxShadow: 3, borderRadius: 2 }} >
        <Card sx={{ maxWidth: 345, width: 200, mt: '9px', mb: '9px', ml: '4px' }} onClick={() => { startQuiz('Java'); }}>
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
        <Card sx={{ maxWidth: 345, width: 200, mt: '9px', mb: '9px', ml: '4px' }} onClick={() => { startQuiz('Python'); }}>
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
      <Grid container spacing={1} mt={'10px'}>
        <Grid item xs={12} md={4}>
          <Box display='flex' alignItems='center' justifyContent='space-evenly' sx={{ boxShadow: 3, borderRadius: 1, height: '150px' }}>
            <img src={newbie} alt="newbie" style={{ height: '100px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant='h3' fontStyle='italic' sx={{ color: theme.palette.primary.dark }}>Unlock your badges</Typography>
              <Typography>Hurry! collect them</Typography>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box display='flex' alignItems='center' justifyContent='space-evenly' sx={{ boxShadow: 3, borderRadius: 1, height: '150px' }}>
            <div>
              <Badge badgeContent={statistics.plansCompleted} sx={{ mt: '4px', mb: '4px', mr: '4px' }} color="primary" showZero>
                <SchoolOutlinedIcon color="primary" fontSize='large' />
              </Badge>
              <Typography variant='h4'>Learning Plans Completed</Typography>
            </div>
            <div>
              <Badge badgeContent={0} sx={{ mt: '4px', mb: '4px', mr: '4px' }} color="primary" showZero>
                <EmojiEventsTwoToneIcon color="primary" fontSize='large' />
              </Badge>
              <Typography variant='h4'>Achivements</Typography>
            </div>
            <div>
              <Badge badgeContent={0} sx={{ mt: '4px', mb: '4px', mr: '4px' }} color="primary" showZero>
                <AddReactionTwoToneIcon color="primary" fontSize='large' />
              </Badge>
              <Typography variant='h4'>XP Gained</Typography>
            </div>

          </Box>
        </Grid>
      </Grid>

      <Typography variant="body1">
      </Typography>
    </MainCard>
  )
};

export default HomePage;
