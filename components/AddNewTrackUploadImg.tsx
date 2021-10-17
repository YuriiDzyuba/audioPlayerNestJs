import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const AddNewTrackUploadImg = () => {
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
                    add Picture
                </Typography>
                <Button variant="contained" component="label">
                    Upload File
                    <input type="file" hidden />
                </Button>
            </Grid>
        </Stack>
    );
};

export default AddNewTrackUploadImg;
