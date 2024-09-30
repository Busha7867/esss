import React from 'react'
import { useState } from 'react'
import { SlideshowLightbox } from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import Cust1 from '../Portimage/Custom/Custom1.jpg';
import Cust2 from '../Portimage/Custom/Custom4.jpg';
import Cust3 from '../Portimage/Custom/Custom5.jpg';
const Exhibitionslider = () => {

    const images = [
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom1.jpg',
            alt: 'Mechanical keyboard with white keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom4.jpg',
            alt: 'Mechanical keyboard with white, pastel green and red keycaps.',
        },
        {
            src:'http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom5.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
    ]

    let [isOpen, setIsOpen] = useState(false);

    return (
        <div className='popslider'>
            <div className="container">
                <div className="row">
                    <div className="grids">
                    <img src={Cust1} alt="" onClick={()=> {setIsOpen(true)}} className='grid_image1'/>
                    <img src={Cust2} alt="" onClick={()=> {setIsOpen(true)}} className='grid_image2'/>
                    <img src={Cust3} alt="" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
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
export default Exhibitionslider;