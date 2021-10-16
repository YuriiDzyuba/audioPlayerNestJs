import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ITrackItem } from '../types/track.type';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import AddTaskIcon from '@mui/icons-material/AddTask';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { AddCommentModal } from '../modals/AddComment.modal';
import { ShowTrackTextModal } from '../modals/ShowTrackText.modal';

const TrackCard: React.FC<ITrackItem> = ({ track }) => {
    const theme = useTheme();

    return (
        <>
            <Card
                elevation={8}
                sx={{
                    mb: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Stack direction="row" justifyContent="start" alignItems="center">
                    <CardMedia
                        component="img"
                        sx={{ height: 250, width: 250 }}
                        image={track.picture}
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h3">
                                {track.name}
                            </Typography>
                            <Typography variant="h5" color="text.secondary" component="div">
                                {track.artist}
                            </Typography>
                            <Divider sx={{ mb: 1, mt: 1 }} />
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                listens:{track.listens}
                            </Typography>
                            <Rating sx={{ pr: 2 }} name="read-only" value={2} readOnly />
                        </CardContent>
                    </Box>
                </Stack>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <ShowTrackTextModal />
                    <AddCommentModal />
                    <Tooltip title="add to favorites">
                        <IconButton
                            sx={{ mr: 2, ml: 0.5, border: '#1976d2 1px solid' }}
                            color="info"
                            size="large"
                            aria-label="delete"
                        >
                            <AddTaskIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Card>
            <Card
                elevation={8}
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            comments
                        </Typography>
                        <Divider sx={{ mb: 1, mt: 1 }} />
                    </CardContent>
                </Box>
            </Card>
        </>
    );
};

export default TrackCard;
