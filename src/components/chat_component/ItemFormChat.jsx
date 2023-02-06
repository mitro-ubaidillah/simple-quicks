import { Box, Flex, Grid, GridItem, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import moreIcon from '../../assets/icons/more_horiz.png';

const ItemFormChat = () => {
    return (
        <Flex
            wrap={'wrap'}
            width={'full'}
            px={'19px'}
            justify={'flex-end'}
        >
            <Text
                fontWeight={'700'}
                color={'chats.purple'}
                fontSize={'14px'}
                width={'full'}
                textAlign={'right'}
            >
                You
            </Text>
            <Stack
                direction={'row-reverse'}
            >
                <Box
                    bg={'chats.bgPurple'}
                    maxWidth={'450px'}
                    p={'10px'}
                    borderRadius={'md'}
                >
                    <Text
                        fontWeight={'400'}
                        color={'primary.dark'}
                        fontSize={'14px'}
                        lineHeight={'18px'}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, adipisci, eos neque tempora aliquid, dolor reprehenderit consequatur
                    </Text>
                    <Text
                        fontSize={'12px'}
                        color={'primary.dark'}
                        fontWeight={'400'}
                        mt={'12px'}
                    >
                        09:30
                    </Text>
                </Box>
                <Box
                    height={'auto'}
                    pt={'7px'}
                >
                    <Image src={moreIcon} height={'4px'} />
                </Box>
            </Stack>
        </Flex>
    );
}

export default ItemFormChat;
