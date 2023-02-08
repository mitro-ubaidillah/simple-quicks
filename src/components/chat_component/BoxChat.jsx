import React from 'react';
import FormChat from './FormChat';
import { Box } from '@chakra-ui/react';
import ListChatDisplay from './ListChatDisplay';

const BoxChat = ({ chat, allChats, isLoading, onClick, dialog, detailChat, onBackChat, onCloseChat, onSendChat, valueNewMessage, onChangeNewMessage }) => {
    return (
        <Box>
            {!dialog ?
                <>
                    <ListChatDisplay
                        allChats={allChats}
                        isLoading={isLoading}
                        onClick={onClick}
                    />
                </>
                :
                <>
                    <FormChat
                        detailChat={detailChat}
                        chat={chat}
                        onBackChat={onBackChat}
                        onCloseChat={onCloseChat}
                        onSendChat={onSendChat}
                        onChangeNewMessage={onChangeNewMessage}
                        valueNewMessage={valueNewMessage}
                    />
                </>
            }
        </Box>
    );
}

export default BoxChat;
