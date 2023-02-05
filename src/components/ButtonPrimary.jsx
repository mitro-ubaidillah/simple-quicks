import { Button } from '@chakra-ui/react';
import React from 'react';

const ButtonPrimary = ({title}) => {
    return (
        <Button
            color={'white'}
            bg={'primary.blue'}
            px={'16px'}
            py={'14px'}
            fontWeight={'400'}
            fontSize={'18px'}
        >
            {title}
        </Button>
    );
}

export default ButtonPrimary;
