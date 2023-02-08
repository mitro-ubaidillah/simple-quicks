import { Avatar, Box } from '@chakra-ui/react';
import React from 'react';

const ChatIcon = ({ bg, top, left, index, icon, name }) => {
    return (
        <Avatar
            width={'34px'}
            height={'34px'}
            bg={bg}
            position={'absolute'}
            top={top}
            left={left}
            zIndex={index}
            icon={icon}
            name={name}
        />
    );
}

export default ChatIcon;
