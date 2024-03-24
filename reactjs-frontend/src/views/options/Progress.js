import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './Progress.css';

const ProgressBar = (props) => {

  // Optional function to update progress externally (if needed)
  //   const updateProgress = (newProgress) => {
  //     const updatedPercentage = Math.min(Math.max(0, newProgress * (100 / maxValue)), 100);
  //     setPercentage(updatedPercentage);
  //   };

  return (


    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '150px', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  )
};

export default ProgressBar;


