import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const DividerChat = () => {
    return (
        <Flex
            justify={'center'}
            align={'center'}
            width={'full'}
            gap={'20px'}
        >
            <Box height={'1px'} bg={'primary.dark'} width={'full'} maxWidth={'210px'}/>
            <Text
                fontWeight={'700'}
                fontSize={'16px'}
                color={'primary.dark'}
            >
                Today June 09, 2021
            </Text>
            <Box height={'1px'} bg={'primary.dark'} width={'full'} maxWidth={'210px'}/>
        </Flex>
    );
}

export default DividerChat;
