import React from 'react'
import "./head.css"
import { IconContext } from "react-icons";
import {AiOutlineMenu}  from 'react-icons/ai'

const Header = () => {
  return (
    <div className='header'>
<div className='logo'> <h1>Senerge</h1></div>
<div className='menu'> <IconContext.Provider value={{ color: "black", className: "global-class-name" ,size:'2em', style:{marginTop:'4px'}}}>

    <AiOutlineMenu/>
 
</IconContext.Provider></div>



    </div>
  )
}

export default Header