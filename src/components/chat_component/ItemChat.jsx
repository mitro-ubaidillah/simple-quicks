import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import ChatIcon from './ChatIcon';
import GroupChatIcon from './GroupChatIcon';

const ItemChat = ({ label, currentChat, currentUserName, timeChat, group, onClick, id }) => {
    return (
        <Flex
            cursor={'pointer'}
            defaultValue={id}
            onClick={() => onClick(id)}
            borderBottom={'1px'}
            borderColor={'primary.gray'}
            pb={'32px'}
            width={'full'}
            gap={'16px'}
        >
            {group ?
                <GroupChatIcon />
                :
                <Box
                    mr={'40px'}
                    position={'relative'}
                >
                    <ChatIcon name={label} left={'10px'} bg={'primary.blue'}/>
                </Box>
            }
            <Box
                maxWidth={'300px'}
            >
                <Text
                    fontWeight={'700'}
                    color={'primary.blue'}
                    lineHeight={'none'}
                    mb={'9px'}
                >
                    {label}
                </Text>
                <Text
                    fontWeight={'700'}
                    color={'primary.dark'}
                    lineHeight={'none'}
                    mb={'4px'}
                >
                    {currentUserName} :
                </Text>
                <Text
                    lineHeight={'none'}
                >
                    {currentChat}
                </Text>
            </Box>
            <Box>
                <Text
                    lineHeight={'none'}
                >
                    {timeChat}
                </Text>
            </Box>
        </Flex>
    );
}

export default ItemChat;
