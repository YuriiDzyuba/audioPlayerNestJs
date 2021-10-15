import Stack from '@mui/material/Stack';
import React from 'react';
import { ITrackList } from '../types/track.type';
import TrackItem from './TrackItem';
import Divider from '@mui/material/Divider';

const TrackList: React.FC<ITrackList> = ({ tracks }) => {
    return (
        <Stack direction="column" justifyContent="space-between" alignItems="stretch">
            <div>
                {tracks.map((track, index) => (
                    <TrackItem key={index} track={track} />
                ))}
            </div>
        </Stack>
    );
};

export default TrackList;
