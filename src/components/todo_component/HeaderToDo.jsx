import React from 'react';
import ButtonPrimary from '../ButtonPrimary';
import { Flex, Select } from '@chakra-ui/react';

const HeaderToDo = () => {
    return (
        <Flex
            justify={'space-between'}
            width={'full'}
            pl={'80px'}
        >
            <Select placeholder='My Task' maxWidth={'120px'} fontSize={'14px'}>
                <option value='option1'>Personal Errands</option>
                <option value='option2'>Urgent To-Do</option>
            </Select>
            <ButtonPrimary title={'New Task'} />
        </Flex>
    );
}

export default HeaderToDo;
