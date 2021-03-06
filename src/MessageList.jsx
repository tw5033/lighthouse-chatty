/* eslint-disable react/prop-types */
import React from 'react';
import Message from './Message.jsx';

// The parent component that draws each message received from the websocket server
const MessageList = (props) => {
  const {messages} = props;
  const messageItems = messages.map(message => (
    <Message key={message.id} 
      message={message}/>
  ));
  return (
    <main className="messages">
      {messageItems}
    </main>
  )
}

export default MessageList;