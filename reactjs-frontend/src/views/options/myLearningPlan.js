import ProgressBar from './Progress';
import React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import noData from 'assets/images/users/no data.jpg';
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //



function NullData({ noData }) {
    return (
        <MainCard>
            <Box display={'flex'} justifyContent={'center'}>
                <img alt='nodata' src={noData} width='900px' height='500px' />
            </Box>
        </MainCard>
    );
}

function PlanDetails() {
    return (
        <Box sx={{ width: '100%', minHeight: '400px', boxShadow: 3, backgroundColor: '#ffffff', padding: '10px' }}>
            <Accordion sx={{ width: '90%', boxShadow: 2, margin: '10px', marginTop: '20px' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Box sx={{ width: '1000px', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant='h3' fontWeight={700}> Accordion Actions </Typography>
                        <ProgressBar value="80" />
                    </Box>

                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
                <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                </AccordionActions>
            </Accordion>
        </Box>
    );
}

const MyLearningPlan = () => {

    const [isDataNull] = React.useState(true);
    return (
        <div>
            {isDataNull ? <NullData noData={noData} /> : <PlanDetails />}
        </div>
    )


};

export default MyLearningPlan;