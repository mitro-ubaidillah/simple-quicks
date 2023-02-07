import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import { Input } from '@chakra-ui/input';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/accordion';
import { Image } from '@chakra-ui/image';
import ButtonIcon from '../ButtonIcon';
import more from '../../assets/icons/more_horiz.png';
import { Checkbox } from '@chakra-ui/checkbox';
import timeIcon from '../../assets/icons/time.png';
import editIcon from '../../assets/icons/edit.png';
import ButtonPrimary from '../ButtonPrimary';

const InputToDo = ({ valueInput, onChangeTodo }) => {
    return (
        <Box
            width={'full'}
        >
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem
                    border={'none'}
                >
                    <Flex
                        gap={'10px'}
                    >
                        <Checkbox
                            colorScheme=''
                            iconColor='primary.gray'
                            alignItems={'self-start'}
                            pt={'1'}
                        />
                        <Input
                            value={valueInput}
                            onChange={onChangeTodo}
                            placeholder='Type Task Title'
                            border={'1px'}
                            borderRadius={'md'}
                            height={'40px'}
                            maxWidth={'300px'}
                            minWidth={'300px'}
                            borderColor={'primary.gray'}
                            size='sm'
                        />
                        <AccordionButton>
                            <Box
                                flex='1'
                                textAlign={'right'}
                            >
                                <AccordionIcon />
                            </Box>
                        </AccordionButton>
                        <Box
                            mt={'20px'}
                            mr={'30px'}
                        >
                            <ButtonIcon
                            >
                                <Image src={more} width={'35px'} />
                            </ButtonIcon>
                        </Box>
                    </Flex>
                    <AccordionPanel pb={4}>
                        <Box
                            ml={'15px'}
                        >
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
                                // defaultValue={defaultDate}
                                // value={valueDate}
                                // onChange={onChangeDate}
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
                                    No Description
                                </Text>
                            </Flex>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box >
    );
}

export default InputToDo;
