import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { NextPage } from 'next';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import { ITrack } from '../../types/track.type';
import TrackList from '../../components/TrackList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from '../../store';
import { fetchTracks } from '../../store/action-creators/track';

const Tracks: NextPage = () => {
    const { tracks, error } = useTypedSelector(state => state.track);
    // const tracks: ITrack[] = [
    //     {
    //         _id: 'qwdqeff4fewffdfsdf',
    //         name: 'du hast',
    //         artist: 'rammstain',
    //         text: 'string str ingstr ng',
    //         listens: 0,
    //         picture: 'https://static.dw.com/image/49947376_303.jpg',
    //         audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    //         comments: [],
    //     },
    //     {
    //         _id: 'qwdqeff4fewff3423dfsdf',
    //         name: 'alter man',
    //         artist: 'rammstain',
    //         text: 'string str ingstr ng',
    //         listens: 20,
    //         picture: 'https://radioultra.ru/uploads/photos/1/2020/09/rammstein%20back.jpg',
    //         audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    //         comments: [],
    //     },
    //     {
    //         _id: 'qwdqeff4fe33423dswffdfsdf',
    //         name: 'sonne',
    //         artist: 'rammstain',
    //         text: 'string str ingstr ng',
    //         listens: 23,
    //         picture: 'https://i.pinimg.com/736x/b7/99/a3/b799a3af7a564fbd7c23c7456654c959.jpg',
    //         audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    //         comments: [],
    //     },
    //     {
    //         _id: 'qwdqeff4fewff234234dfsdf',
    //         name: 'main tain',
    //         artist: 'rammstain',
    //         text: 'string str ingstr ng',
    //         listens: 56,
    //         picture: 'https://sefon.pro/img/artist_photos/rammstein.jpg',
    //         audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    //         comments: [],
    //     },
    // ];

    if (error) {
        return (
            <MainLayout>
                <h1>{error}</h1>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <Stack direction="column" justifyContent="flex-start" alignItems="stretch">
                <Stack direction="row" justifyContent="space-between" alignItems="stretch">
                    <div>
                        <h3>Tracks</h3>
                    </div>
                    <Stack direction="column" justifyContent="center" alignItems="center">
                        <Link href="/tracks/create-track">
                            <Button variant="outlined">upload new track</Button>
                        </Link>
                    </Stack>
                </Stack>
                <Divider sx={{ mb: 2 }} />
                <TrackList tracks={tracks} />
            </Stack>
        </MainLayout>
    );
};

export default Tracks;

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchTracks());
});
