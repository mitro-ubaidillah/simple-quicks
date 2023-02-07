import { Flex } from '@chakra-ui/layout';
import React from 'react';
import ItemToDo from './ItemToDo';
import Loading from '../Loading';

const ListItemTodo = ({ todos, isLoading, valueDate, onChangeDate }) => {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dateNow = date.getDate();

    return (
        <Flex
            width={'full'}
            direction={'column'}
            mb={'23px'}
            gap={'23px'}
        >
            {
                isLoading ?
                    <Loading title={'Loading Task List ...'} />
                    :
                    todos.map((data) => {
                        const dateTodo = parseInt(data.date?.substr(0,2));
                        const monthTodo = parseInt(data.date?.substr(3,2));
                        const yearTodo = parseInt(data.date?.substr(6,4));
                        const newDate = `${yearTodo}-${monthTodo < 10 ? `0${monthTodo}` : monthTodo }-${dateTodo < 10 ? `0${dateTodo}` : dateTodo}`;
                        let remainderDate = dateTodo - dateNow;
                        let remainderMonth = month - monthTodo;

                        if (year - yearTodo == 0) {
                            if(remainderMonth > 0) {
                                remainderDate = `${remainderMonth} month ${remainderDate}`;   
                            }
                        }
                        return (
                            <ItemToDo
                                titleTodo={data?.title}
                                bodyTodo={data.body}
                                key={data.id}
                                date={data.date}
                                remainder={remainderDate}
                                leftDays={remainderDate}
                                completed={data.completed}
                                defaultDate={newDate}
                                valueDate={valueDate}
                                onChangeDate={onChangeDate}
                            />
                        )
                    }
                    )
            }
        </Flex>
    );
}

export default ListItemTodo;
