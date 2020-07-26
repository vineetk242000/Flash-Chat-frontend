import React from "react";
import ScrolltoBottom from "react-scroll-to-bottom"
import Icon from "./icon/user.png"

function Users({users}){
    return(
        <ScrolltoBottom className="active-users">
        <center><h1 className="room">Avaialble Users</h1></center>
        {users?(<div>
        {users.map(({name})=>(
            <h3 ><img src={Icon} /><span>{name}</span></h3> 
        ))}
        </div>):null}
        </ScrolltoBottom>
    )




}

export default Users;