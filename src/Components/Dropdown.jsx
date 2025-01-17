
import React from 'react'
import { useState } from 'react'
import { MenuItems} from './MenuItems';
import {Link} from 'react-router-dom';
import './dropDown.css';

const DropDown = () => {

  const[click,setClick]=useState(false)

  const handleClick=()=>{
    setClick(!click)
  }

  return (
          <>

          <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {MenuItems.map((item,index) =>{
              return(

                <li key={index}>
                  <Link title="abc" className={item.cName} to={item.path} onClick={()=>setClick(false)}>{item.title}</Link>
                </li>
              )
            })}

          </ul>
          
          
          </>
  )
}

export default DropDown;









