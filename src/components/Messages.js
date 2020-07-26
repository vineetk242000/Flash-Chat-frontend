import React from "react";
import ScrollBottom from "react-scroll-to-bottom";
import Message from "./Message"

function Messages({messages,name}){
    

    return(
    <ScrollBottom className="messages">
    {messages.map((message,i) => <div key={i}><Message text={message.text} user={message.user} name={name}/></div>)}
    </ScrollBottom>
    )

}


export default Messages;