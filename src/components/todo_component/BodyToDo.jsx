import { Box, Flex, HStack, Image, Input, Tag, Text } from '@chakra-ui/react';
import React from 'react';
import ButtonIcon from '../ButtonIcon';
import timeIcon from '../../assets/icons/time.png';
import editIcon from '../../assets/icons/edit.png';
import bookmarkIcon from '../../assets/icons/bookmarks.png';

const BodyToDo = ({ body, valueDate, onChangeDate, defaultDate, bookmark }) => {
    return (
        <Box>
            <Flex
                align={'center'}
                gap={'23.53px'}
                p={'10px'}
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
                // width={'full'}
                align={'start'}
                px={'10px'}
                gap={'30px'}
            >
                <ButtonIcon>
                    <Image src={editIcon} height={'15px'} />
                </ButtonIcon>
                <Text
                    fontSize={'14px'}
                    color={'primary.dark'}
                    maxWidth={'450px'}
                >
                    {body}
                </Text>
            </Flex>
            <Flex
                width={'full'}
                align={'center'}
                gap={'25px'}
                mt={'20px'}
                p={'10px'}
                bg={'#f9f9f9'}
                borderRadius={'5px'}
            >
                <ButtonIcon>
                    <Image src={bookmarkIcon} height={'15px'} />
                </ButtonIcon>
                <HStack
                    spacing={4}
                >
                    {bookmark?.map((data, index) => {
                        let bgTag = 'white';

                        if (data.toLowerCase() == 'important asap') {
                            bgTag = 'stickers.one'
                        }else if(data.toLowerCase() == 'offline meeting'){
                            bgTag = 'stickers.two'
                        }else if(data.toLowerCase() == 'virtual meeting'){
                            bgTag = 'stickers.three'
                        }else if(data.toLowerCase() == 'asap'){
                            bgTag = 'stickers.four'
                        }else if(data.toLowerCase() == 'client related'){
                            bgTag = 'stickers.five'
                        }else if(data.toLowerCase() == 'self task'){
                            bgTag = 'stickers.six'
                        }else if(data.toLowerCase() == 'appointments'){
                            bgTag = 'stickers.seven'
                        }else if(data.toLowerCase() ==='court related'){
                            bgTag = '#9DD0ED'
                        }

                        return (
                            <Tag size={'md'} key={index} variant='solid' bg={bgTag}>
                                <Text
                                    color={'primary.dark'}
                                    fontWeight={'700'}
                                >
                                    {data}
                                </Text>
                            </Tag>
                        )
                    })}
                </HStack>
            </Flex>
        </Box>
    );
}

export default BodyToDo;
