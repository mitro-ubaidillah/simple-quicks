import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import expand from '../../assets/icons/expand.png';
import more from '../../assets/icons/more_horiz.png';
import ButtonIcon from '../ButtonIcon';

const TitleToDo = () => {
    return (
        <Flex
            color={'primary.dark'}
            gap={'20px'}
        >
            <Text
                fontWeight={'700'}
                fontSize={'14px'}
                maxWidth={'300px'}
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vero ipsa molestias
            </Text>
            <Text
                color={'indicators.red'}
                fontWeight={'400'}
                fontSize={'12px'}
            >
                2 Days Left
            </Text>
            <Text
                fontWeight={'400'}
                fontSize={'12px'}
            >
                12/06/2021
            </Text>
            <ButtonIcon
                py={'5px'}
            >
                <Image src={expand} width={'10px'} />
            </ButtonIcon>
            <ButtonIcon
                py={'7px'}
            >
                <Image src={more} width={'14px'} />
            </ButtonIcon>
        </Flex>
    );
}

export default TitleToDo;
