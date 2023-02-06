import React from 'react';
import LayoutBox from '../LayoutBox';
import SearchBarComponent from './SearchBarComponent';
import ItemChat from './ItemChat';
import FormChat from './FormChat';
import { Box } from '@chakra-ui/react';
import ListChatDisplay from './ListChatDisplay';

const BoxChat = () => {
    const chat = true;
    return (
        <Box>
            {!chat ?
                <>
                    <ListChatDisplay />
                </>
                :
                <>
                    <FormChat />
                </>
            }
        </Box>
    );
}

export default BoxChat;
