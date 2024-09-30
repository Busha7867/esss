import React from "react";
import { useState } from "react";
import { Menuitems2 } from "../Components/Menuitems2";
import { Link } from "react-router-dom";
import './dropDown.css';

const Drop = () => {


    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)



    }
    return (


        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {Menuitems2.map((item, index) => {


                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>{item.title}</Link>
                            </li>
                        )
                    })}




            </ul>

        </>
    )
}
export default Drop;