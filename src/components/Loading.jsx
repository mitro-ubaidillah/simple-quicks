import { Box, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import React from 'react';

const Loading = ({ title }) => {
    return (
        <Box
            position={'absolute'}
            bottom={'300px'}
            left={'290px'}
        >
            <Spinner
                alignSelf={'center'}
                thickness='10px'
                speed='0.65s'
                emptyColor='white'
                color='#c4c4c4'
                height={'85px'}
                width={'85px'}
            />
            <Text
                fontSize={'14px'}
                color={'primary.dark'}
                fontWeight={'700'}
            >
                {title}
            </Text>
        </Box>
    );
}

export default Loading;
