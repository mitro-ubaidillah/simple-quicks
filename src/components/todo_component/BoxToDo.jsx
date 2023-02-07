import React from 'react';
import LayoutBox from '../LayoutBox';
import HeaderToDo from './HeaderToDo';
import ListItemTodo from './ListItemTodo';
import { Box } from '@chakra-ui/layout';
import ItemToDo from './ItemToDo';

const BoxToDo = ({ todos, isLoading }) => {
    return (
        <LayoutBox
            px={'18px'}
        >
            <HeaderToDo />
            <Box
                overflowY={'scroll'}
                width={'full'}
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
                <ListItemTodo todos={todos} isLoading={isLoading} />
            </Box>
        </LayoutBox>
    );
}

export default BoxToDo;
