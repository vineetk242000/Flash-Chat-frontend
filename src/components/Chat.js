import React, { useEffect,useState } from "react";
import Input from "./Input";
import Users from "./User"
import Messages from "./Messages";
import io from "socket.io-client";
import queryString from 'query-string';



let socket;
function Chat({location}){
    const[name,setName]=useState("");
    const [room,setRoom]=useState("");
    const [message,setMessage]=useState();
    const [users,setUsers]=useState('');
    const [messages,setMessages]=useState([]);
    const ENDPOINT="https://vk-flash-chat.herokuapp.com/"
    useEffect(()=>{
     const {name,room}=queryString.parse(location.search);
     socket=io(ENDPOINT);
     setName(name);
     setRoom(room);
     socket.emit('join',{name,room});
     return(
         socket.emit("disconnect"),
         socket.off()
     )
    },[ENDPOINT,location.search]);
    
    useEffect(()=>{
        socket.on('message',(message=>{
         setMessages(messages => [...messages,(message)])
        }))

        socket.on('roomData',({users})=>{
            setUsers(users);
        });
    },[]);

     
    async function sendMessage(event){
        event.preventDefault();
        if(message){
        await socket.emit('sendMessage',message,()=> setMessage(""));
        }
        await setMessage("");
    }
    
    return(
        <div>
        <center><h1 className="room" >Active Room : {room}</h1></center>
        <Users users={users} />
        <Messages messages={messages} name={name} />
        <button className="leave"><a href="/">Leave Room</a></button>
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} 
        style={{width:"40%",display:"inline-block"}}
        />
        
        </div>
    )

}



export default Chat;