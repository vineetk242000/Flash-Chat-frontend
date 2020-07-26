import React,{useState} from 'react';
import {Link} from "react-router-dom";



function Register(){
  const [name,setName] = useState('');
  const [room,setRoom] = useState("");
    return(
      <div>
      <div className="register">
      
      <h1 className="form-title">Register</h1>
      <input type="text" placeholder="Enter your name" autoCapitalize="true" spellCheck="false"
       className="nameField" onChange={(event) => setName(event.target.value)}></input>
       <input type="text" placeholder="Enter room" autoCapitalize="true" spellCheck="false"
       className="nameField" onChange={(event) => setRoom(event.target.value)} style={{marginTop:"10px"}}></input>
      <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`} >
      <button type="submit">Enter the Chat</button>
      </Link>
      </div>
      </div>
    
    )


}

export default Register;