import { HStack } from '@chakra-ui/react';
import React from 'react';

const LayoutBox = ({ children }) => {
    return (
        <HStack
            gap={'22px'}
        >
            {children}
        </HStack>
    );
}

export default LayoutBox;
