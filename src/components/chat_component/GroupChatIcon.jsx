import React from 'react';
import ChatIcon from './ChatIcon';
import { Box } from '@chakra-ui/react';
import { MdOutlinePersonOutline } from 'react-icons/md';

const GroupChatIcon = () => {
    return (
        <Box
            position={'relative'}
            mr={'60px'}
        >
            <ChatIcon
                bg={'primary.blue'}
                top={0}
                left={'17px'}
                index={'10'}
                icon={<MdOutlinePersonOutline fontSize={'20px'} />}
            />
            <ChatIcon
                bg={'primary.white'}
                icon={<MdOutlinePersonOutline fontSize={'20px'} color={'#0000008a'} />}
            />
        </Box>
    );
}

export default GroupChatIcon;
