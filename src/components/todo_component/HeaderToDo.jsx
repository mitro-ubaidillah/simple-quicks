import React from 'react';
import ButtonPrimary from '../ButtonPrimary';
import { Flex, Select } from '@chakra-ui/react';

const HeaderToDo = ({ onClick, input, valueTodo, onChangeTodo }) => {
    return (
        <Flex
            justify={'space-between'}
            width={'full'}
            pl={'80px'}
        >
            <Select maxWidth={'160px'} value={valueTodo} fontSize={'14px'} onChange={onChangeTodo}>
                <option value="mytask">My Task</option>
                <option value='personal'>Personal Errands</option>
                <option value='urgent'>Urgent To-Do</option>
            </Select>
            <ButtonPrimary title={input ? 'Cancel' : 'New Task'} onClick={onClick} />
        </Flex>
    );
}

export default HeaderToDo;
