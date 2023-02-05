import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import ButtonPrimary from '../components/ButtonPrimary';

const Home = () => {
    return (
        <Box>
            <Text>
                Components
            </Text>
            <ButtonPrimary title={'Button Primary'} />
        </Box>
    );
}

export default Home;
