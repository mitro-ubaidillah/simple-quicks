import React from 'react';
import LayoutBox from '../LayoutBox';
import SearchBarComponent from './SearchBarComponent';
import ItemChat from './ItemChat';
import Loading from '../Loading';

const ListChatDisplay = ({ allChats, isLoading, onClick }) => {
    return (
        <LayoutBox
            px={'32px'}
        >
            <SearchBarComponent />
            {
                isLoading ?
                    <Loading title={'Loading Chat ...'} />
                    :
                    allChats?.map((data, index) => (
                        <ItemChat
                            id={data.id}
                            onClick={onClick}
                            key={index}
                            group={data.group}
                            currentChat={data.chats[allChats.length - 1].message}
                            currentUserName={data.chats[allChats.length - 1].name}
                            label={data.label}
                            timeChat={`${data.chats[allChats.length - 1].date} ${data.chats[allChats.length - 1].time}`}
                        />
                    ))
            }
        </LayoutBox>
    );
}

export default ListChatDisplay;
