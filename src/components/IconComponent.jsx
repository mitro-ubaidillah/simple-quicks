import { Button } from '@chakra-ui/react';
import React from 'react';

const IconComponent = ({icon, bg}) => {
    return (
        <Button
            bg={bg}
            borderRadius={'full'}
            height={'68px'}
            width={'68px'}
        >
            {icon}
        </Button>
    );
}

export default IconComponent;
