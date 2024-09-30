import React from 'react'
import { useState } from 'react'
import { SlideshowLightbox } from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import Custom1 from '../Pages/Portimage/Custom/Custom1.jpg';
import Custom2 from '../Pages/Portimage/Custom/Custom2.jpg';
import Custom3 from '../Pages/Portimage/Custom/Custom3.jpg';
import Custom4 from '../Pages/Portimage/Custom/Custom4.jpg';
import Custom5 from '../Pages/Portimage/Custom/Custom5.jpg';
import Custom6 from '../Pages/Portimage/Custom/Custom6.jpg';
import Custom7 from '../Pages/Portimage/Custom/Custom7.jpg';
import Custom8 from '../Pages/Portimage/Custom/Custom8.jpg';
import Custom9 from '../Pages/Portimage/Custom/Custom9.jpg';

import Custom12 from '../Pages/Portimage/Custom/Custom12.jpg';
import Custom13 from '../Pages/Portimage/Custom/Custom13.jpg';
import Custom14 from '../Pages/Portimage/Custom/Custom14.jpg';
import Custom15 from '../Pages/Portimage/Custom/Custom15.jpg';
import Custom16 from '../Pages/Portimage/Custom/Custom16.jpg';
import Custom17 from '../Pages/Portimage/Custom/Custom17.jpg';

import Custom19 from '../Pages/Portimage/Custom/Custom19.jpg';
import Custom20 from '../Pages/Portimage/Custom/Custom20.jpg';

import Custom26 from '../Pages/Portimage/Custom/Custom26.jpg';
import Custom27 from '../Pages/Portimage/Custom/Custom27.jpg';
import Custom28 from '../Pages/Portimage/Custom/Custom28.jpg';
import Custom29 from '../Pages/Portimage/Custom/Custom29.jpg';
import Custom30 from '../Pages/Portimage/Custom/Custom30.jpg';
import Custom31 from '../Pages/Portimage/Custom/Custom31.jpg';
import Custom32 from '../Pages/Portimage/Custom/Custom32.jpg';
import Custom54 from '../Pages/Portimage/Custom/Custom54.jpg';
import Custom34 from '../Pages/Portimage/Custom/Custom34.jpg';
import Custom35 from '../Pages/Portimage/Custom/Custom35.jpg';
import Custom37 from '../Pages/Portimage/Custom/Custom37.jpg';
import Custom38 from '../Pages/Portimage/Custom/Custom38.jpg';
import Custom39 from '../Pages/Portimage/Custom/Custom39.jpg';
import Custom40 from '../Pages/Portimage/Custom/Custom40.jpg';
import Custom41 from '../Pages/Portimage/Custom/Custom41.jpg';
import Custom42 from '../Pages/Portimage/Custom/Custom42.jpg';
import Custom43 from '../Pages/Portimage/Custom/Custom43.jpg';
import Custom44 from '../Pages/Portimage/Custom/Custom44.jpg';
import Custom45 from '../Pages/Portimage/Custom/Custom45.jpg';
import Custom46 from '../Pages/Portimage/Custom/Custom46.jpg';
import Custom47 from '../Pages/Portimage/Custom/Custom47.jpg';
import Custom48 from '../Pages/Portimage/Custom/Custom48.jpg';
import Custom49 from '../Pages/Portimage/Custom/Custom49.jpg';
import Custom50 from '../Pages/Portimage/Custom/Custom50.jpg';
import Custom51 from '../Pages/Portimage/Custom/Custom51.jpg';
import Custom52 from '../Pages/Portimage/Custom/Custom52.jpg';
import Custom53 from '../Pages/Portimage/Custom/Custom53.jpg';

import Custom55 from '../Pages/Portimage/Custom/Custom55.jpg';
import Custom56 from '../Pages/Portimage/Custom/Custom56.jpg';
import Custom57 from '../Pages/Portimage/Custom/Custom57.jpg';
import Custom33 from '../Pages/Portimage/Custom/Custom33.jpg';


const CustomSlider = () => {

    const images = [



        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom26.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom27.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom28.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom29.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom30.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom31.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom32.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom54.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom34.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom35.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom37.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom38.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom39.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom40.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom41.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom42.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom43.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom44.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom45.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom46.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom47.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom48.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom49.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom50.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom51.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom52.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom53.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom33.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom55.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom56.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom57.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom1.jpg',
            alt: 'Mechanical keyboard with white keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom1.jpg',
            alt: 'Mechanical keyboard with white, pastel green and red keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom2.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom4.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom5.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom6.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom7.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        {
            src: '	http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom8.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom9.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
     
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom12.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom13.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom2.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom14.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom15.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom16.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom17.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom19.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom20.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        {
            src: 'http://localhost:5173/src/Components/Pages/Portimage/Custom/Custom2.jpg',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
       
       
    ]

    let [isOpen, setIsOpen] = useState(false);

    return (
        <div className='popslider'>
            <div className="container">
                <div className="row">
                    <div className="grids">
                    <img src={Custom26} alt="custom exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom27} alt="custom exhibition booth" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom28} alt="custom exhibition design" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom29} alt="custom exhibition company" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom30} alt="custom exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom31} alt="custom exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom32} alt="custom exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom54} alt="custom exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom34} alt="custom exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom35} alt="custom exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
               
                    <img src={Custom37} alt="custom exhibition booth" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom38} alt="custom exhibition booth" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom39} alt="custom exhibition booth" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom40} alt="custom exhibition booth" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom42} alt="custom exhibition booth" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom41} alt="custom exhibition booth" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom43} alt="custom exhibition booth" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom44} alt="custom exhibition booth" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom45} alt="custom exhibition booth" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom46} alt="custom exhibition booth" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom47} alt="custom exhibition booth" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom48} alt="custom exhibition design" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom49} alt="custom exhibition design" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom50} alt="custom exhibition design" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom51} alt="custom exhibition design" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom52} alt="custom exhibition design" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom53} alt="custom exhibition design" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom33} alt="custom exhibition design" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom55} alt="custom exhibition design" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom56} alt="custom exhibition design" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom57} alt="custom exhibition design" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom57} alt="custom exhibition design" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    
                    <img src={Custom1} alt="custom exhibition stand" onClick={()=> {setIsOpen(true)}} className='grid_image1'/>
                    <img src={Custom2} alt="custom exhibition stand" onClick={()=> {setIsOpen(true)}} className='grid_image2'/>
                    <img src={Custom3} alt="custom exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom4} alt="custom exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom5} alt="custom exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom6} alt="custom exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom7} alt="custom exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom8} alt="custom exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom9} alt="custom exhibition stand" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    
                    <img src={Custom12} alt="custom exhibition design" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom13} alt="custom exhibition design" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom14} alt="custom exhibition design" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom15} alt="custom exhibition design" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom16} alt="custom exhibition design" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom17} alt="custom exhibition design" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                   
                    <img src={Custom19} alt="custom exhibition design" onClick={()=> {setIsOpen(true)}}className='grid_image3' />
                    <img src={Custom20} alt="custom exhibition design" onClick={()=> {setIsOpen(true)}}className='grid_image3' />

                   
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
export default CustomSlider;