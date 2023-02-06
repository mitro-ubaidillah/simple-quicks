import { Box, Button } from '@chakra-ui/react';
import React from 'react';

const ButtonIcon = ({ children, onClick, py }) => {
    return (
        <Box
            bg={'transparent'}
            _hover={{ bg:'transparent' }}
            py={py}
            width={'auto'}
            cursor={'pointer'}
            onClick={onClick}
        >
            {children}
        </Box>
    );
}

export default ButtonIcon;
