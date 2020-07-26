import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom"
import FlashOnIcon from '@material-ui/icons/FlashOn';

function Header(){
return(
<div className="top">
<h1 className="name"> <FlashOnIcon className="icon" style={{ fontSize: 45 }} /> Chat</h1>
<ul>
<li><Link to="/"><HomeIcon className="nav-icon" style={{ fontSize: 30 }}/></Link></li>
<li><GitHubIcon className="nav-icon" style={{ fontSize: 30 }}/></li>
<li><Link to="/chat" ><ChatIcon className="nav-icon" style={{ fontSize: 30 }}/></Link></li>
</ul>
</div>




    )
}



export default Header;