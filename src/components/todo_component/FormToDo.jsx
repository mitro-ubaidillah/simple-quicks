import { Box, Flex } from '@chakra-ui/layout';
import React from 'react';
import InputToDo from './InputToDo';
import ButtonPrimary from '../ButtonPrimary';

const FormToDo = ({ input }) => {
    return (
        <Flex
            display={input ? 'block' : 'none'}
            width={'full'}
            pr={'20px'}
            pl={'10px'}
        >
            <InputToDo />
            <Box
                width={'full'}
                textAlign={'right'}
            >
                <ButtonPrimary title={'add'} />
            </Box>
        </Flex>
    );
}

export default FormToDo;
