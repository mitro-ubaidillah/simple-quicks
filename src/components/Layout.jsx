import { Box } from '@chakra-ui/react';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <Box
            minHeight={'100vh'}
            maxWidth={'100vw'}
            bg={'gray'}
        >
            {children}
        </Box>
    );
}

export default Layout;
