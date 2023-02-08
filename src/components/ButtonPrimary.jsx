import { Button } from '@chakra-ui/react';
import React from 'react';

const ButtonPrimary = ({ title, onClick }) => {
    return (
        <Button
            color={'white'}
            bg={'primary.blue'}
            fontWeight={'400'}
            fontSize={'14'}
            width={'auto'}
            px={'16px'}
            py={'14px'}
            _hover={{ bg: 'hover.blue' }}
            onClick={onClick}
        >
            {title}
        </Button>
    );
}

export default ButtonPrimary;
