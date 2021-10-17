import { PlayerAction, PlayerActionTypes } from '../../types/player.type';
import { ITrack } from '../../types/track.type';

export const playTrack = (): PlayerAction => {
    return { type: PlayerActionTypes.PLAY };
};

export const pauseTrack = (): PlayerAction => {
    return { type: PlayerActionTypes.PAUSE };
};

export const setDuration = (payload: number): PlayerAction => {
    return { type: PlayerActionTypes.SET_DURATION, payload };
};

export const setVolume = (payload: number): PlayerAction => {
    return { type: PlayerActionTypes.SET_VOLUME, payload };
};

export const SetCurrentTime = (payload: number): PlayerAction => {
    return { type: PlayerActionTypes.SET_CURRENT_TIME, payload };
};

export const SetActiveTrack = (payload: ITrack): PlayerAction => {
    return { type: PlayerActionTypes.SET_ACTIVE, payload };
};
