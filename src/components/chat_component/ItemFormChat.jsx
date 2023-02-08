import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import moreIcon from '../../assets/icons/more_horiz.png';

const ItemFormChat = ({ name, message, timeChat }) => {
    return (
        <Flex
            wrap={'wrap'}
            width={'full'}
            px={'25px'}
            justify={name == 'You' ? 'flex-end' : 'flex-start'}
            mt={'2'}
        >
            <Text
                fontWeight={'700'}
                color={name == 'You' ? 'chats.purple' : 'chats.orange'}
                fontSize={'14px'}
                width={'full'}
                textAlign={name == 'You' ? 'right' : 'left'}
            >
                {name}
            </Text>
            <Flex
                direction={name == 'You' ? 'row-reverse' : 'row'}
                width={'full'}
                gap={'10px'}
            >
                <Box
                    bg={name == 'You' ? 'chats.bgPurple' : 'chats.bgOrange'}
                    maxWidth={'450px'}
                    minWidth={'70px'}
                    p={'10px'}
                    borderRadius={'md'}
                    textAlign={name == 'You' ? 'right' : 'left'}
                >
                    <Text
                        fontWeight={'400'}
                        color={'primary.dark'}
                        fontSize={'14px'}
                        lineHeight={'18px'}
                    >
                        {message}
                    </Text>
                    <Text
                        fontSize={'12px'}
                        color={'primary.dark'}
                        fontWeight={'400'}
                        mt={'12px'}
                    >
                        {timeChat}
                    </Text>
                </Box>
                <Box
                    height={'auto'}
                    pt={'7px'}
                >
                    <Image src={moreIcon} height={'4px'} />
                </Box>
            </Flex>
        </Flex>
    );
}

export default ItemFormChat;
