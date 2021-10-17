import { Dispatch } from 'redux';
import { TrackAction, TrackActionTypes } from '../../types/track.type';
import axios from 'axios';

export const fetchTracks = () => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const response = await axios.get('http://localhost:5001/tracks');
        } catch (e) {
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS_ERROR,
                payload: 'something went wrong',
            });
        }
    };
};
