import { Box } from '@chakra-ui/react';
import React from 'react';

const BgActive = () => {
    return (
        <Box
            right={0}
            mx={'49px'}
            position={'absolute'}
            borderRadius={'full'}
            bg={'primary.dark'}
            width={'68px'}
            height={'68px'}
        />
    );
}

export default BgActive;
