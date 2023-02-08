import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import arrowBack from '../../assets/icons/arrow_back_black.png';
import close from '../../assets/icons/close_black.png';
import ButtonIcon from "../ButtonIcon";
import { motion } from 'framer-motion';

const HeaderChat = ({ label, participants, group, onCloseChat, onBackChat }) => {
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
                <ButtonIcon
                    onClick={onBackChat}
                >
                    <motion.div
                        whileTap={{ scale: 0.9 }}
                    >
                        <Image src={arrowBack} height={'16px'} />
                    </motion.div>
                </ButtonIcon>
                <Box>
                    <Text
                        fontWeight={'700'}
                        color={'primary.blue'}
                        fontSize={'16px'}
                    >
                        {label}
                    </Text>
                    <Text
                        fontWeight={'400'}
                        fontSize={'12px'}
                    >
                        {group ? `${participants} Participants` : ' '}
                    </Text>
                </Box>
            </Flex>
            <ButtonIcon
                onClick={onCloseChat}
            >
                <motion.div
                    whileTap={{ scale: 0.7 }}
                >
                    <Image src={close} height={'14px'} />
                </motion.div>
            </ButtonIcon>
        </Flex>
    );
}

export default HeaderChat;