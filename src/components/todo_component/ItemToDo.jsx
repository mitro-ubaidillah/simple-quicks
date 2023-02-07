import React from 'react';
import TitleToDo from './TitleToDo';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Checkbox, Flex, Image, Stack } from '@chakra-ui/react';
import BodyToDo from './BodyToDo';
import ButtonIcon from '../ButtonIcon';
import more from '../../assets/icons/more_horiz.png';

const ItemToDo = ({ titleTodo, bodyTodo, date, remainder, leftDays, completed, onChangeDate, valueDate, defaultDate }) => {
    return (
        <Flex
            borderBottom={'1px'}
            borderColor={'primary.gray'}
            pb={'20px'}
            width={'auto'}
            mx={'10px'}
        >
            <Checkbox
                colorScheme=''
                iconColor='primary.gray'
                alignItems={'self-start'}
                pt={'1'}
            />
            <Accordion allowMultiple defaultIndex={completed ? [1] : [0]} flex={1}>
                <AccordionItem
                    border={'none'}
                >
                    <Flex>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <TitleToDo title={titleTodo} date={date} completed={completed} remainder={remainder} leftDays={leftDays} />
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <Box
                            mt={'15px'}
                            mr={'30px'}
                        >
                            <ButtonIcon
                            >
                                <Image src={more} width={'14px'} />
                            </ButtonIcon>
                        </Box>
                    </Flex>

                    <AccordionPanel pb={4}>
                        <BodyToDo body={bodyTodo} onChangeDate={onChangeDate} valueDate={valueDate} defaultDate={defaultDate} />
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Flex>
    );
}

export default ItemToDo;
