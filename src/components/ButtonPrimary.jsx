import { Button } from '@chakra-ui/react';
import React from 'react';

const ButtonPrimary = ({title}) => {
    return (
        <Button
            color={'white'}
            bg={'primary.blue'}
            fontWeight={'400'}
            fontSize={'16x'}
            width={'auto'}
            px={'16px'}
            py={'14px'}
            _hover={{ bg:'hover.blue' }}
        >
            {title}
        </Button>
    );
}

export default ButtonPrimary;
