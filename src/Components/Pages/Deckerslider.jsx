import React from 'react'
import { useState } from 'react'
import { SlideshowLightbox } from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css';
import Deck1 from './Portimage/Decker/Decker1.jpg';
import Deck3 from './Portimage/Decker/Decker3.jpg';
import Deck5 from './Portimage/Decker/Decker5.jpg';



const Deckerslider = () => {

    const images = [
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Decker/Decker1.jpg',
            alt: 'Mechanical keyboard with white keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Decker/Decker3.jpg',
            alt: 'Mechanical keyboard with white, pastel green and red keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Decker/Decker5.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        
    ]

    let [isOpen, setIsOpen] = useState(false);

    return (
        <div className='popslider'>
            <div className="container">
                <div className="row">
                    <div className="grids">
                    <img src={Deck1} alt="duoubledecker exhibition stand" onClick={()=> {setIsOpen(true)}} className='grid_image1'/>
                    <img src={Deck5} alt="duoubledecker exhibition stand" onClick={()=> {setIsOpen(true)}} className='grid_image2'/>
                    <img src={Deck3} alt="duoubledecker exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Deck5} alt="duoubledecker exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Deck5} alt="duoubledecker exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Deck5} alt="duoubledecker exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    
                    
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
export default Deckerslider;