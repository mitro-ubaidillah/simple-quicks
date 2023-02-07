import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const TitleToDo = ({ title, date, remainder, leftDays, completed }) => {
    return (
        <Flex
            gap={'20px'}
            width={'full'}
        >
            <Text
                color={completed ? 'primary.gray' : 'primary.dark'}
                fontWeight={'700'}
                fontSize={'14px'}
                maxWidth={'300px'}
                minWidth={'300px'}
                textAlign={'left'}
                textDecoration={completed ? 'line-through' : 'unset'}
            >
                {title}
            </Text>
            <Text
                color={'indicators.red'}
                fontWeight={'400'}
                fontSize={'12px'}
                opacity={leftDays <= 0 ? 0 : 1}
            >
                {`${remainder} days left`}
            </Text>
            <Text
                fontWeight={'400'}
                fontSize={'12px'}
                textAlign={'right'}
                color={'primary.dark'}
            >
                {date}
            </Text>
        </Flex>
    );
}

export default TitleToDo;
