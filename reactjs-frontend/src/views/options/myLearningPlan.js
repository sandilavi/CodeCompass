// material-ui
import { Typography } from '@mui/material';
import { useState } from 'react';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import noData from 'assets/images/users/no data.jpg'
import { Box } from '@mui/system';

// ==============================|| SAMPLE PAGE ||============================== //

const MyLearningPlan = () => {

    const [isDatanull, setIsDatanull] = useState(true);

    const LearningProgress = () => {
        <Typography>

        </Typography>
    }

    return (
        <MainCard>
            <Box display={'flex'} justifyContent={'center'}>
                <img alt='nodata' src={noData} width='900px' height='500px' />
            </Box>

        </MainCard>
    );
};

export default MyLearningPlan;