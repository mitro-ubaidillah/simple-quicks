import React from 'react';
import LayoutBox from '../LayoutBox';
import HeaderChat from './HeaderChat';
import ItemFormChat from './ItemFormChat';
import { Flex } from '@chakra-ui/react';
import DividerChat from './DividerChat';

const FormChat = () => {
    const name = 'you';
    return (
        <LayoutBox>
            <HeaderChat />
            <ItemFormChat />
            <DividerChat />
        </LayoutBox>
    );
}

export default FormChat;
