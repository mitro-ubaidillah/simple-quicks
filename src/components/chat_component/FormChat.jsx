import React from 'react';
import LayoutBox from '../LayoutBox';
import HeaderChat from './HeaderChat';
import ItemFormChat from './ItemFormChat';
import { Flex } from '@chakra-ui/react';

const FormChat = () => {
    const name = 'you';
    return (
        <LayoutBox>
            <HeaderChat />
            <ItemFormChat />
        </LayoutBox>
    );
}

export default FormChat;
