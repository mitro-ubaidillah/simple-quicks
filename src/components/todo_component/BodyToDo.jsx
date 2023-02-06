import { Box, Flex, Image, Input, Text } from '@chakra-ui/react';
import React from 'react';
import ButtonIcon from '../ButtonIcon';
import timeIcon from '../../assets/icons/time.png';
import editIcon from '../../assets/icons/edit.png';

const BodyToDo = () => {
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
                    placeholder="12/06/2021"
                    height={'40px'}
                    type="date"
                    maxWidth={'250px'}
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem inventore temporibus dolorum harum nobis veritatis consequuntur ex atque architecto necessitatibus id, vel, totam fuga culpa labore, possimus quae fugiat saepe.
                </Text>
            </Flex>
        </Box>
    );
}

export default BodyToDo;
