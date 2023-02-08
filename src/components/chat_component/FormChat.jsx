import React from 'react';
import LayoutBox from '../LayoutBox';
import HeaderChat from './HeaderChat';
import ItemFormChat from './ItemFormChat';
import { Box, Flex } from '@chakra-ui/react';
import DividerChat from './DividerChat';
import TypeBarComponent from '../TypeBarComponent';
import ButtonPrimary from '../ButtonPrimary';

const FormChat = ({ chat, detailChat, onBackChat, onCloseChat }) => {
    return (
        <LayoutBox>
            <HeaderChat
                group={chat.group}
                label={chat.label}
                participants={chat.participants}
                onBackChat={onBackChat}
                onCloseChat={onCloseChat}
            />
            <Box
                width={'full'}
                overflowY={'scroll'}
                css={{
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        width: '10px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#BDBDBD',
                        borderRadius: '24px',
                    },
                }}
            >
                {
                    detailChat?.map((data, index) => {
                        return(    
                            <ItemFormChat
                                message={data.message}
                                name={data.name}
                                timeChat={data.time}
                                key={index}
                            />
                        )
                    })
                }
            </Box>
            <Flex
                position={'relative'}
                bottom={'10px'}
                left={'20px'}
                gap={'13px'}
            >
                <TypeBarComponent placeholder={'Type a new message'} />
                <ButtonPrimary title={'Send'} />
            </Flex>
            {/* <DividerChat /> */}
        </LayoutBox>
    );
}

export default FormChat;
