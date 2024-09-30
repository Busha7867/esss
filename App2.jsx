import React from "react";
import img1 from './src/Components/image4.jpg';
import img2 from './src/Components/image5.jpg';

import ExpandingCards from "./ExpandingCards";
import './src/App2.css';


const images=[

    {
        id:"1",
        title:"Custom Stand",
     
        url:"http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom29.jpg",
        active:true
    },
    {
        id:"2",
        title:"Double Decker",
        url:"http://localhost:5173/src/Components/Pages/Portimage/Decker/Decker1.jpg",
        active:false
    },
    {
        id:"3",
        title:"Modular Stand",
        url:"http://localhost:5173/src/Components/Pages/Portimage/Moular/Modular2.jpg",
        active:false
    },
    {
        id:"4",
        title:"Country Pavilion ",
        url:"http://localhost:5173/src/Components/Pages/Portimage/Pavilon/Pavilion1.jpg",
        active:false
    },
    {
        id:"5",
        title:"Double Decker",
        url:"https://www.expostandservice.com/wp-content/uploads/2022/12/2-2-min-768x493.jpg.webp",
        active:false
    },
    {
        id:"6",
        title:"Modular Stand",
        url:'http://localhost:5173/src/Components/Pages/Portimage/Moular/Modular1.jpg',
        active:false
    },
    {
        id:"7",
        title:"Custom Stand",
        url:"	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom32.jpg",
        active:false
    },
    {
        id:"8",
        title:"Country Pavilion",
        url:'http://localhost:5173/src/Components/Pages/Portimage/Pavilon/Pavilion4.jpg',
        active:false
    },
]

const App2=()=>{
    return<ExpandingCards data={images}/>



}
export default App2;