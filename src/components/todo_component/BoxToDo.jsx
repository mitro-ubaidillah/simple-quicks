import React from 'react';
import LayoutBox from '../LayoutBox';
import HeaderToDo from './HeaderToDo';
import ItemToDo from './ItemToDo';

const BoxToDo = () => {
    return (
        <LayoutBox
            px={'18px'}
        >
            <HeaderToDo />
            <ItemToDo />
        </LayoutBox>
    );
}

export default BoxToDo;
