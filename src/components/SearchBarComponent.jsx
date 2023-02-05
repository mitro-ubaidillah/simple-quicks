import { Image, Input, InputGroup } from '@chakra-ui/react';
import React from 'react';
import SearchIcon from '../assets/icons/search.png';

const SearchBarComponent = ({ valueSearch, onChangeSearch, placeholder }) => {
    return (
        <InputGroup>
            <Input
                value={valueSearch}
                onChange={onChangeSearch}
                placeholder={placeholder}
                width={'580px'}
                height={'40px'}
                py={'10px'}
                px={'86px'}
                bg={'white'}
                borderRadius={'5px'}
                border={'1px'}
                borderColor={'primary.gray'}
            />
            <InputRightElement width='4.5rem'>
                <Image
                    src={SearchIcon}
                    width={'12px'}
                    height={'12px'}
                />
            </InputRightElement>
        </InputGroup>
    );
}

export default SearchBarComponent;
