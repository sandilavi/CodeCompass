import React from 'react';
import Box from '@mui/material/Box';
import noData from 'assets/images/users/no data.jpg';
import MainCard from 'ui-component/cards/MainCard';
import UserService from 'services/UserService';
import PlanDetails from './PlanDetails';

// ==============================|| SAMPLE PAGE ||============================== //





const MyLearningPlan = () => {
    function NullData({ noData }) {
        return (
            <MainCard>
                <Box display={'flex'} justifyContent={'center'}>
                    <img alt='nodata' src={noData} width='900px' height='500px' />
                </Box>
            </MainCard>
        );
    }

    const [isDataNull, setIsDataNull] = React.useState(true);
    const [courseId, setCourseId] = React.useState(1);
    const [level, setLevel] = React.useState([]);

    React.useEffect(() => {
        let userId = JSON.parse(localStorage.getItem('id'));
        let levels = []
        setCourseId(1);
        UserService.getProgress(courseId, userId)
            .then(response => {
                console.log(response.data)
                levels = response.data.map(obj => ({ "level": obj.level, "topic": obj.topic, "language": "Java" }));
                setLevel(levels);
                if (response.data.length > 0) {
                    setIsDataNull(false);
                }
            }).catch(error => {
                console.error(error.message);
            });
    }, []);

    return (
        <div>
            {isDataNull ? <NullData noData={noData} /> : <PlanDetails datas={level} id={courseId} />}
        </div>
    )


};

export default MyLearningPlan;