//import MainCard from 'ui-component/cards/MainCard';
//import noData from 'assets/images/users/no data.jpg'
//import { Box } from '@mui/system';
import ProgressBar from './Progress'; 
import React from 'react';

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

    const [currentProgress, setCurrentProgress] = React.useState(25);
  
    const handleClick = () => {
      setCurrentProgress((prevProgress) => Math.min(prevProgress + 10, 100));
    };
  
    return (
      <div>
        <ProgressBar progress={currentProgress} label="Lesson Progress" />
        <button onClick={handleClick}>Increase Progress</button>
      </div>
    );

    // const [isDataNull, setIsDatanull] = React.useState(false);
    // return(
    //         <div>
    //           {isDataNull ? <NullData noData={noData} /> : <ProgressTracker />}
    //         </div>
    // )

    
};

export default MyLearningPlan;