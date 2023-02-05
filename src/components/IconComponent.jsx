import { Button } from '@chakra-ui/react';
import React from 'react';

const IconComponent = ({ icon, bg, hover, onCLickBtnIcon, order }) => {
    return (
        <Button
            bg={bg}
            borderRadius={'full'}
            height={'68px'}
            width={'68px'}
            _hover={hover}
            onClick={onCLickBtnIcon}
            order={order}
        >
            {icon}
        </Button>
    );
}

export default IconComponent;
