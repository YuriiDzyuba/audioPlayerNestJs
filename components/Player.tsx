import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { useTheme } from '@mui/material/styles';
import style from '../styles/player.module.scss';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Typography from '@mui/material/Typography';
import { useActions } from '../hooks/useActions';
import { SetCurrentTime } from '../store/action-creators/player';
import { getTime } from '../utils/getTime';

let audio: any;

const Player: React.FC = () => {
    const theme = useTheme();
    const { pause, volume, duration, currentTime, active } = useTypedSelector(
        state => state.player,
    );
    const { pauseTrack, playTrack, setVolume, SetCurrentTime, setDuration, SetActiveTrack } =
        useActions();

    useEffect(() => {
        if (!audio) {
            audio = new Audio();
        } else {
            setAudio();
            play();
        }
    }, [active]);

    const setAudio = () => {
        if (active) {
            audio.src = active.audio;
            audio.volume = volume / 100;
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration));
            };
            audio.ontimeupdate = () => {
                SetCurrentTime(Math.ceil(audio.currentTime));
            };
        }
    };

    if (!active) return null;

    const play = () => {
        if (pause) {
            playTrack();
            audio.play();
        } else {
            pauseTrack();
            audio.pause();
        }
    };

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = parseInt(e.target.value);
        audio.volume = value / 100;
        setVolume(value);
    };

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = parseInt(e.target.value);
        audio.currentTime = value;
        SetCurrentTime(value);
    };

    return (
        <Stack className={style.player}>
            <Stack className={style.player__left}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>

                    <IconButton onClick={play} aria-label="play/pause">
                        {pause ? (
                            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        ) : (
                            <PauseIcon sx={{ height: 38, width: 38 }} />
                        )}
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </Box>
                <Box className={style.player__trackName}>
                    <Typography component="div" variant="subtitle1">
                        {active?.name}
                    </Typography>{' '}
                    <Typography component="div" variant="subtitle2">
                        {active?.artist}
                    </Typography>
                </Box>
                <Box className={style.player__volume}>
                    <Stack direction="row" alignItems="center" sx={{ width: '100%' }}>
                        <VolumeDown />
                        <Slider
                            aria-label="Volume"
                            min={0}
                            max={100}
                            value={volume}
                            onChange={changeVolume}
                        />
                        <VolumeUp />
                    </Stack>
                </Box>
            </Stack>
            <Stack className={style.player__right}>
                <Box className={style.player__durationText}>
                    <Typography component="div" variant="subtitle2">
                        {currentTime}
                    </Typography>
                </Box>
                <Box className={style.player__duration}>
                    <Slider
                        max={duration}
                        value={currentTime}
                        valueLabelDisplay="auto"
                        onChange={changeCurrentTime}
                    />
                </Box>
                <Box className={style.player__durationText}>
                    <Typography component="div" variant="subtitle2">
                        {duration}
                    </Typography>
                </Box>
            </Stack>
        </Stack>
    );
};
export default Player;
