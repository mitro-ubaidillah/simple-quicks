import React from 'react';
import TitleToDo from './TitleToDo';
import { Box, Checkbox, Flex } from '@chakra-ui/react';
import BodyToDo from './BodyToDo';

const ItemToDo = () => {
    return (
        <Flex
            borderBottom={'1px'}
            borderColor={'primary.gray'}
            pb={'20px'}
            width={'full'}
            gap={'22px'}
        >
            <Checkbox
                colorScheme=''
                iconColor='primary.gray'
                alignItems={'self-start'}
                pt={'1'}
            />
            <Box>
                <TitleToDo />
                <BodyToDo />
            </Box>
        </Flex>
    );
}

export default ItemToDo;
