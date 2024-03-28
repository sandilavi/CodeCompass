import ProgressBar from './Progress';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import UserService from 'services/UserService';
import { useNavigate } from 'react-router-dom';

function PlanDetails({ datas, id }) {

    const [detail, setDetail] = useState([]);
    const [precentage, setPrecentage] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        // setParamData(...datas);
        const fetchData = async () => {
            console.log(datas);
            const updatedObjects = [];
            let tempArr = []
            for (let index = 0; index < datas.length; index++) {
                try {

                    const response = await UserService.getLearningPlanDetails(datas[index].level, datas[index].language);
                    tempArr.push(...response.data.map(({ topic }) => ({ topic })));
                    const uniqueTopics = [...new Map(tempArr.map(item => [item['topic'], item])).values()];
                    console.log(uniqueTopics);
                    let precentage = (Math.round(((uniqueTopics.findIndex(x => x.topic === datas[index].topic) + 1) / (uniqueTopics.length) * 100)));
                    setPrecentage(precentage);
                    updatedObjects.push({ "level": datas[index].level, "topic": datas[index].topic, "language": datas[index].language, "precentage": precentage });
                    console.log(updatedObjects);
                    console.log(updatedObjects.length);

                } catch (error) {
                    console.log(error);
                }
            }
            //          setDetail([...updatedObjects]);
            setDetail([...updatedObjects.map(({ topic, language, level }) => ({ topic, language, level }))]);
        };

        fetchData();

    }, [precentage]);

    function navigatePlan(level, topic) {
        let data = { "level": level, "topic": topic };
        navigate('/player', { replace: true, state: data });
    }

    return (
        <>

            {<Box sx={{ width: '100%', minHeight: '400px', boxShadow: 3, backgroundColor: '#ffffff', padding: '10px' }}>

                {detail.map((item, index) => (
                    <Accordion key={index} sx={{ width: '90%', boxShadow: 2, margin: '10px', marginTop: '20px' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            <Box sx={{ width: '1000px', display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant='h3' fontWeight={700}> {id === 1 ? "Java" : "Default"} </Typography>
                                <ProgressBar value={precentage} />
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant='h4' sx={{ fontWeight: 600, fontFamily: 'poppins', color: 'GrayText' }}>
                                {item.topic} - {item.level} level
                            </Typography>
                        </AccordionDetails>
                        <AccordionActions>
                            <Button onClick={() => navigatePlan(item.level, item.topic)}>Continue</Button>
                        </AccordionActions>
                    </Accordion>
                ))}
            </Box>}

        </>
    );
} export default PlanDetails;