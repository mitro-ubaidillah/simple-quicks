import { Box, Flex, Image, Input, Text } from '@chakra-ui/react';
import React from 'react';
import ButtonIcon from '../ButtonIcon';
import timeIcon from '../../assets/icons/time.png';
import editIcon from '../../assets/icons/edit.png';

const BodyToDo = ({ body, valueDate, onChangeDate, defaultDate }) => {
    return (
        <Box>
            <Flex
                align={'center'}
                gap={'23.53px'}
                mt={'15px'}
                mb={'10px'}
            >
                <ButtonIcon>
                    <Image src={timeIcon} height={'17px'} />
                </ButtonIcon>
                <Input
                    height={'40px'}
                    type="date"
                    maxWidth={'250px'}
                    defaultValue={defaultDate}
                    value={valueDate}
                    onChange={onChangeDate}
                />
            </Flex>
            <Flex
                width={'full'}
                align={'start'}
                gap={'23.53px'}
            >
                <ButtonIcon>
                    <Image src={editIcon} height={'15px'} />
                </ButtonIcon>
                <Text
                    fontSize={'14px'}
                    color={'primary.dark'}
                    maxWidth={'500px'}
                >
                    {body}
                </Text>
            </Flex>
        </Box>
    );
}

export default BodyToDo;
