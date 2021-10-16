import React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const AddNewTrackAddDescription = () => {
    return (
        <Stack direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={8}>
                <Typography
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        pt: 5,
                        pb: 2,
                    }}
                    component="div"
                    variant="h5"
                >
                    add new track
                </Typography>
                <TextField
                    sx={{ pb: 2, width: '100%' }}
                    id="standard-basic"
                    label="name"
                    variant="standard"
                />
                <TextField
                    sx={{ pb: 2, width: '100%' }}
                    id="standard-basic"
                    label="artist"
                    variant="standard"
                />
                <TextField
                    sx={{ pb: 2, mt: 2, width: '100%' }}
                    id="outlined-multiline-static"
                    label="text"
                    multiline
                    rows={4}
                    defaultValue=""
                />
            </Grid>
        </Stack>
    );
};

export default AddNewTrackAddDescription;
