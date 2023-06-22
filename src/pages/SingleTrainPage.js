import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { getTrainData, getTrainSchedules } from '../services/api';

const SingleTrainPage = ({ accessToken }) => {
    const [train, setTrain] = useState(null);

    useEffect(() => {
        fetchSingleTrain();
    }, []);

    const fetchSingleTrain = async () => {
        try {
            const trainSchedule = await getTrainData(accessToken);
            const singleTrain = findSingleTrain(trainSchedule);
            setTrain(singleTrain);
        } catch (error) {
            console.error('Error fetching single train:', error);
        }
    };

    const findSingleTrain = (trainSchedules) => {
        console.log(trainSchedules);
        return trainSchedules.find((train) => train.id === '123');
    };

    return (
        <Container maxWidth="md">
            {train ? (
                <div>
                    <p>rendering singlepage</p>
                    {/* Render single train details */}
                </div>
            ) : (
                <Typography variant="h6" align="center">
                    Train not found
                </Typography>
            )}
        </Container>
    );
};

export default SingleTrainPage;