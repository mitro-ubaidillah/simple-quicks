import { Input, InputGroup } from '@chakra-ui/react';
import React from 'react';

const TypeBarComponent = ({ placeholder, valueBar, onChangeBar }) => {
    return (
        <Input
            value={valueBar}
            onChange={onChangeBar}
            placeholder={placeholder}
            width={'537px'}
            height={'40px'}
            py={'10px'}
            px={'16px'}
            bg={'white'}
            borderRadius={'5px'}
            border={'1px'}
            borderColor={'primary.gray'}
        />
    );
}

export default TypeBarComponent;
