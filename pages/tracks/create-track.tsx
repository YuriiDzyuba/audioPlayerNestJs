import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { NextPage } from 'next';
import { AddNewTrackStepper } from '../../components/AddNewTrackStepper';
import AddNewTrackAddDescription from '../../components/AddNewTrackAddDescription';

const CreateTrack: NextPage = () => {
    return (
        <MainLayout>
            <AddNewTrackStepper>
                <AddNewTrackAddDescription />
                <h3>2 dfjsdfsfsfsdf</h3>
                <h3>3 dfjsdfsfsfsdf</h3>
            </AddNewTrackStepper>
        </MainLayout>
    );
};

export default CreateTrack;
