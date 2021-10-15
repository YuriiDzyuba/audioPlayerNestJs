export interface ITrackItem {
    track: ITrack;
    active?: boolean;
}

export interface IComment {
    _id: string;
    username: string;
    text: string;
}

export interface ITrack {
    _id: string;
    name: string;
    artist: string;
    text: string;
    listens: number;
    picture: string;
    audio: string;
    comments: IComment[];
}

export interface ITrackList {
    tracks: ITrack[];
}
