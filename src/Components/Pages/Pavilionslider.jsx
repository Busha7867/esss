import React from 'react'
import { useState } from 'react'
import { SlideshowLightbox } from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css';
import Pav1 from "./Portimage/Pavilon/Pavilion1.jpg";
import Pav2 from './Portimage/Pavilon/Pavilion2.jpg';
import Pav3 from './Portimage/Pavilon/Pavilion3.jpg';
import Pav4 from './Portimage/Pavilon/Pavilion4.jpg';
import Pav5 from './Portimage/Pavilon/Pavilion5.jpg';
import Pav6 from './Portimage/Pavilon/Pavilion6.jpg';
import Pav7 from './Portimage/Pavilon/Pavilion7.jpg';

import Pav9 from './Portimage/Pavilon/Pavilion9.jpg';
import Pav10 from './Portimage/Pavilon/Pavilion10.jpg';
import Pav11 from './Portimage/Pavilon/Pavilion11.jpg';
import Pav12 from './Portimage/Pavilon/Pavilion12.jpg';
import Pav13 from './Portimage/Pavilon/Pavilion13.jpg';
import Pav14 from './Portimage/Pavilon/Pavilion14.jpg';
import Pav15 from './Portimage/Pavilon/Pavilion15.jpg';
import Pav16 from './Portimage/Pavilon/Pavilion16.jpg';
import Pav17 from './Portimage/Pavilon/Pavilion17.jpg';
import Pav18 from './Portimage/Pavilon/Pavilion18.jpg';
import Pav19 from './Portimage/Pavilon/Pavilion19.jpg';




const Pavilionslider = () => {

    const images = [
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Pavilon/Pavilion1.jpg',
            alt: 'Mechanical keyboard with white keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Pavilon/Pavilion2.jpg',
            alt: 'Mechanical keyboard with white, pastel green and red keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Pavilon/pavilion3.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Pavilon/Pavilion4.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Pavilon/Pavilion5.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Pavilon/Pavilion6.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Pavilon/Pavilion7.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        
      
      
        
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Pavilon/Pavilion9.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Pavilon/Pavilion10.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Pavilon/Pavilion11.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Pavilon/Pavilion12.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Pavilon/Pavilion13.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Pavilon/Pavilion14.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Pavilon/Pavilion15.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Pavilon/Pavilion16.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Pavilon/Pavilion17.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Pavilon/Pavilion18.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Pavilon/Pavilion19.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        
    
       
    ]

    let [isOpen, setIsOpen] = useState(false);

    return (
        <div className='popslider'>
            <div className="container">
                <div className="row">
                    <div className="grids">
                    <img src={Pav1} alt="pavilion exhibition stand" onClick={()=> {setIsOpen(true)}} className='grid_image1'/>
                    <img src={Pav2} alt="pavilion exhibition stand" onClick={()=> {setIsOpen(true)}} className='grid_image2'/>
                    <img src={Pav3} alt="pavilion exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Pav4} alt="pavilion exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Pav5} alt="pavilion exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Pav6} alt="pavilion exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Pav7} alt="pavilion exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    
                    <img src={Pav9} alt="pavilion exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Pav10} alt="pavilion exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Pav11} alt="pavilion exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Pav12} alt="pavilion exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Pav13} alt="pavilion exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Pav14} alt="pavilion exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Pav15} alt="pavilion exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Pav16} alt="pavilion exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Pav17} alt="pavilion exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Pav18} alt="pavilion exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Pav19} alt="pavilion exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                  
                    
                    
                    
                    </div>
                    {/* <button onClick={() => { setIsOpen(true) }}>
                        <img src={image1} alt="" />
                    </button> */}
                    <SlideshowLightbox
                        images={images}
                        showThumbnails={true}
                        open={isOpen}
                        lightboxIdentifier="lbox1"
                        onClose={() => { setIsOpen(false) }}>
                    </SlideshowLightbox>
                </div>
            </div>
        </div>
    )
}
export default Pavilionslider;