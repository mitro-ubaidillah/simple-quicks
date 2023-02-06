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
            <Select placeholder='My Task' maxWidth={'120px'}>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
            <ButtonPrimary title={'New Task'} />
        </Flex>
    );
}

export default HeaderToDo;
