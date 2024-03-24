import ProgressBar from './Progress'; 
import React from 'react';
import Box from '@mui/material/Box';

// ==============================|| SAMPLE PAGE ||============================== //

// function ProgressTracker() {
    
//   }

// function NullData (noData) {
//     return (
//         <MainCard>
//             <Box display={'flex'} justifyContent={'center'}>
//                 <img alt='nodata' src={noData} width='900px' height='500px' />
//             </Box>

//         </MainCard>
//     );
// }

const MyLearningPlan = () => {
  
    return (
        <Box sx={{ width: '100%' }}>
        <ProgressBar value="70" />
      </Box>
    );

    // const [isDataNull, setIsDatanull] = React.useState(false);
    // return(
    //         <div>
    //           {isDataNull ? <NullData noData={noData} /> : <ProgressTracker />}
    //         </div>
    // )

    
};

export default MyLearningPlan;