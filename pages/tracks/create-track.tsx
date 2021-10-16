import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { NextPage } from 'next';
import { AddNewTrackStepper } from '../../components/AddNewTrackStepper';
import AddNewTrackAddDescription from '../../components/AddNewTrackAddDescription';
import AddNewTrackUploadImg from '../../components/AddNewTrackUploadImg';
import AddNewTrackAddAudio from '../../components/AddNewTrackAddAudio';

const CreateTrack: NextPage = () => {
    return (
        <MainLayout>
            <AddNewTrackStepper>
                <AddNewTrackAddDescription />
                <AddNewTrackUploadImg />
                <AddNewTrackAddAudio />
            </AddNewTrackStepper>
        </MainLayout>
    );
};

export default CreateTrack;
