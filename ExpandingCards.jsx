import React,{useState} from "react";
import Card from "./src/Card";
import './src/Expandingcard.css';


const ExpandingCards = (props) => {

    // const { data } = props;
    const[data,setData]=useState(props.data);
    const onCardClick=(id)=>{
        const newState=[...data];
        newState.map((item)=> item.id === id ? item.active = true : item.active = false )

        setData(newState);


     
    }



    if (!data || data.length <= 0) {
        return 'no return data to render cards'
    }
    // console.log(data)
    return (
        <section className="cards">
            {
                data.map((card) => <Card key={card.id} 
                data={card} onCardClick={onCardClick}/>





                )
            }

        </section>


    )
}

export default ExpandingCards;