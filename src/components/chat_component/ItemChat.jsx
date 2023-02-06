import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import ChatIcon from './ChatIcon';
import GroupChatIcon from './GroupChatIcon';

const ItemChat = () => {
    return (
        <Flex
            borderBottom={'1px'}
            borderColor={'primary.gray'}
            pb={'37px'}
            width={'full'}
            templateColumns='repeat(3, 1fr)' 
            gap={'16px'}
        >
            <GroupChatIcon />
            <Box
                maxWidth={'300px'}
            >
                <Text
                    fontWeight={'700'}
                    color={'primary.blue'}
                    lineHeight={'none'}
                    mb={'9px'}
                >
                    109220-Naturalization sadasdasdasdasdasdadasdasd
                </Text>
                <Text
                    fontWeight={'700'}
                    color={'primary.dark'}
                    lineHeight={'none'}
                    mb={'4px'}
                >
                    Cameron Philips:
                </Text>
                <Text
                    lineHeight={'none'}
                >
                    Please check this out!
                </Text>
            </Box>
            <Box>
                <Text
                    lineHeight={'none'}
                >
                    January 1, 2021 19:10
                </Text>
            </Box>
            
        </Flex>
    );
}

export default ItemChat;
