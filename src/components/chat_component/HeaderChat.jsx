import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import arrowBack from '../../assets/icons/arrow_back_black.png';
import close from '../../assets/icons/close_black.png';

const HeaderChat = () => {
    return (
        <Flex
            bg={'white'}
            borderBottom={'1px'}
            borderColor={'#BDBDBD'}
            width={'full'}
            pb={'18px'}
            justify={'space-between'}
            align={'center'}
            px={'32px'}
        >
            <Flex
                gap={'18px'}
                align={'center'}
            >
                <Image src={arrowBack} height={'16px'} />
                <Box>
                    <Text
                        fontWeight={'700'}
                        color={'primary.blue'}
                        fontSize={'16px'}
                    >
                        I-579 - AMAksd, OPjsjdj [sksdjsds]
                    </Text>
                    <Text
                        fontWeight={'400'}
                        fontSize={'12px'}
                    >
                        3 Participants
                    </Text>
                </Box>
            </Flex>
            <Image src={close} height={'14px'}/>
        </Flex>
    );
}

export default HeaderChat;