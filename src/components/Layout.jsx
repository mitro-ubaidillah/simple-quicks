import { Stack } from '@chakra-ui/react';
import React from 'react';

const Layout = ({children}) => {
    return (
        <Stack
            height={'100vh'}
            width={'full'}
            bg={'chats.bgGreen'}
        >
            {children}
        </Stack>
    );
}

export default Layout;