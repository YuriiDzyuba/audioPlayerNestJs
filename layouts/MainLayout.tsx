import React from 'react';
import Drawer from '../components/Drawer';
import { Container } from '@mui/material';

const MainLayout: React.FC = ({ children }) => {
    return (
        <>
            <Drawer />
            <Container>{children}</Container>
        </>
    );
};

export default MainLayout;
