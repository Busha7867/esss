import React from 'react'
import { useState,useEffect } from 'react';
import '../Components/ArroundWorld.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';




const CounterUp = () => {
    

    const [counterOn, setCounterOn] = useState(false);


    return (
        
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
            <div className="flex grid">
                <div className='counter'>

                    {counterOn && <CountUp start={0} end={750} duration={5} delay={1} />}
                    <div class="counter-icon">
                        <span><i class="fa fa-users"></i></span>
                    </div>
                    +
                    <br />
                    <span className='counter-span'>Clents</span>




                </div>
                <div className='counter'>

                    {counterOn && <CountUp start={0} end={3950} duration={8} delay={1} />}
                    <div class="counter-icon">
                        <span><i class="fas fa-project-diagram"></i></span>
                    </div>


                    +
                    <br />
                    <span className='counter-span'>Projects</span>





                </div>
                <div className='counter'>

                    {counterOn && <CountUp start={0} end={5} duration={9} delay={2} />}

                    <div class="counter-icon">
                        <span><i class="fas fa-globe-europe"></i></span>
                    </div>
                    +
                    <br />
                    <span className='counter-span'>Continents</span>






                </div>
                <div className='counter'>

                    {counterOn && <CountUp start={0} end={320} duration={9} delay={1} />}
                    <div class="counter-icon">
                        <span><i class="fas fa-store-alt"></i></span>
                    </div>
                    +
                    <br />
                    <span className='counter-span'>Exhibition</span>




                </div>
            </div>
        </ScrollTrigger>
    )
}

export default CounterUp