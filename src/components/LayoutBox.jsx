import { Flex } from '@chakra-ui/react';
import React from 'react';

const LayoutBox = ({ children, px }) => {
    return (
        <Flex
            gap={'22px'}
            width={'650px'}
            maxWidth={'650px'}
            height={'600px'}
            maxHeight={'600px'}
            bg={'white'}
            px={px}
            py={'20px'}
            right={'34px'}
            position={'absolute'}
            bottom={'110px'}
            borderRadius={'md'}
            align={'flex-start'}
            direction={'column'}
        >
            {children}
        </Flex>
    );
}

export default LayoutBox;
