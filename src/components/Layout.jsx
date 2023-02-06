import { Stack } from '@chakra-ui/react';
import React from 'react';

const Layout = ({children}) => {
    return (
        <Stack
            height={'100vh'}
            width={'full'}
            bg={'gray'}
        >
            {children}
        </Stack>
    );
}

export default Layout;
