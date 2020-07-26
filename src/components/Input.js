import React from 'react';
import SendRoundedIcon from '@material-ui/icons/SendRounded';



function Input({ setMessage, sendMessage, message }){
  return(
      <div className="input">
      <form>
      <input className="messageField"  value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} ></input>
      <SendRoundedIcon className="sendIcon" style={{fontSize:"50px"}} onClick= {sendMessage} />
      </form>
      </div>
    
    )


}

export default Input;