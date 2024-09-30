import React from "react";
// import '../src/Expandingcard.css';
import '../src/Card.css';


const Card =(props)=>{

    const { id, url,active,title} = props.data;

    return(
      
        <div  className={`card ${active && 'active'}`}
         style={{backgroundImage:`url(${url})`}} 
         onClick={() => props.onCardClick(id)}>
            <h2><i class="fa-solid fa-star-of-life"></i>{title}</h2>
            </div>

    )
    }
export default Card;