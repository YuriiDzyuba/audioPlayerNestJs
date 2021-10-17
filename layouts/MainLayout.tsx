import React from 'react';
import Drawer from '../components/Drawer';
import { Container } from '@mui/material';
import Player from '../components/Player';

const MainLayout: React.FC = ({ children }) => {
    return (
        <>
            <Drawer />
            <Container>{children}</Container>
            <Player />
        </>
    );
};

export default MainLayout;
