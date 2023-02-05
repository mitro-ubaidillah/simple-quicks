import { HStack } from '@chakra-ui/react';
import React from 'react';

const LayoutBox = ({ children }) => {
    return (
        <HStack
            width={'734px'}
            height={'737px'}
            bg={'white'}
            px={'32px'}
            py={'34px'}
            gap={'22px'}
        >
            {children}
        </HStack>
    );
}

export default LayoutBox;
