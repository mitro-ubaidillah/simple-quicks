import React from 'react';
import LayoutBox from '../LayoutBox';
import SearchBarComponent from './SearchBarComponent';
import ItemChat from './ItemChat';
import { Box } from '@chakra-ui/react';

const ListChatDisplay = () => {
    return (
        <LayoutBox
            px={'32px'}
        >
            <SearchBarComponent />
            <ItemChat />
        </LayoutBox>
    );
}

export default ListChatDisplay;
