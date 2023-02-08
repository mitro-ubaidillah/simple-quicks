import React from 'react';
import LayoutBox from '../LayoutBox';
import HeaderToDo from './HeaderToDo';
import ListItemTodo from './ListItemTodo';
import { Box } from '@chakra-ui/layout';
import FormToDo from './FormToDo';

const BoxToDo = ({ todos, isLoading, input, onClick, onChangeTodo, valueTodo }) => {
    return (
        <LayoutBox
            px={'18px'}
        >
            <HeaderToDo onClick={onClick} input={input} valueTodo={valueTodo} onChangeTodo={onChangeTodo} />
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
            <FormToDo input={input} />
        </LayoutBox>
    );
}

export default BoxToDo;
