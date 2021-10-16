import React from 'react';
import { NextPage } from 'next';
import MainLayout from '../../layouts/MainLayout';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TrackCard from '../../components/TrackCard';

const TrackPage: NextPage = () => {
    const track = {
        _id: 'qwdqeff4fewffdfsdf',
        name: 'du hast',
        artist: 'rammstain',
        text: 'string str ingstr ng',
        listens: 22,
        picture: 'https://static.dw.com/image/49947376_303.jpg',
        audio: 'string',
        comments: [],
    };

    return (
        <MainLayout>
            <Stack direction="column" justifyContent="flex-start" alignItems="stretch">
                <Stack direction="row" justifyContent="space-between" alignItems="stretch">
                    <Stack direction="column" justifyContent="center" alignItems="center">
                        <Link href="/tracks">
                            <Button variant="outlined">return</Button>
                        </Link>
                    </Stack>
                    <Stack direction="row" justifyContent="center" alignItems="center">
                        <h3 style={{ marginRight: '5px' }}>{track.artist}</h3>
                        <h3>:</h3>
                        <h3 style={{ marginLeft: '5px' }}>{track.name}</h3>
                    </Stack>
                </Stack>
                <Divider sx={{ mb: 2 }} />
                <TrackCard track={track} />
            </Stack>
        </MainLayout>
    );
};

export default TrackPage;
