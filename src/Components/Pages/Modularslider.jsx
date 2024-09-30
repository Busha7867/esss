import React from 'react'
import { useState } from 'react'
import { SlideshowLightbox } from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css';

import Mod1 from './Portimage/Moular/Modular10.jpg';
import Mod2 from './Portimage/Moular/Modular1.jpg';
import Mod3 from './Portimage/Moular/Modular2.jpg';
import Mod4 from './Portimage/Moular/Modular3.jpg';
import Mod5 from './Portimage/Moular/Modular4.jpg';
import Mod6 from './Portimage/Moular/Modular5.jpg';
import Mod7 from './Portimage/Moular/Modular6.jpg';
import Mod8 from './Portimage/Moular/Modular7.jpg';
import Mod9 from './Portimage/Moular/Modular8.jpg';
import Mod10 from './Portimage/Moular/Modular9.jpg';



const Modularslider = () => {

    const images = [
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Moular/Modular1.jpg',
            alt: 'Mechanical keyboard with white keycaps.',
        },
        
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Moular/Modular2.jpg',
            alt: 'Mechanical keyboard with white, pastel green and red keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Moular/Modular3.jpg',
            alt: 'Mechanical keyboard with white, pastel green and red keycaps.',
        },
        
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Moular/Modular4.jpg',
            alt: 'Mechanical keyboard with white, pastel green and red keycaps.',
        },
        
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Moular/Modular5.jpg',
            alt: 'Mechanical keyboard with white, pastel green and red keycaps.',
        },
        
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Moular/Modular6.jpg',
            alt: 'Mechanical keyboard with white, pastel green and red keycaps.',
        },
        
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Moular/Modular7.jpg',
            alt: 'Mechanical keyboard with white, pastel green and red keycaps.',
        },
        
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Moular/Modular8.jpg',
            alt: 'Mechanical keyboard with white, pastel green and red keycaps.',
        },
        
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Moular/Modular9.jpg',
            alt: 'Mechanical keyboard with white, pastel green and red keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Moular/Modular10.jpg',
            alt: 'Mechanical keyboard with white, pastel green and red keycaps.',
        },
        
        
    ]

    let [isOpen, setIsOpen] = useState(false);

    return (
        <div className='popslider'>
            <div className="container">
                <div className="row">
                    <div className="grids">
                    <img src={Mod1} alt="modular exhibition stand" onClick={()=> {setIsOpen(true)}} className='grid_image1'/>
                    <img src={Mod2} alt="modular exhibition stand" onClick={()=> {setIsOpen(true)}} className='grid_image2'/>
                    <img src={Mod3} alt="modular exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Mod4} alt="modular exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Mod5} alt="modular exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Mod6} alt="modular exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Mod7} alt="modular exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Mod8} alt="modular exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Mod9} alt="modular exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Mod10} alt="modular exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                   
                    
                    
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
export default Modularslider;