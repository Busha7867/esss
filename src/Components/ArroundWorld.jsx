import React from 'react'

import './ArroundWorld.css';
// import JQuery from '../Components/JQuery';
import { Link } from 'react-router-dom';
import App2 from '../../App2';

import Simple from './simple';




const ArroundWorld = () => {
  return (



    <div className="grid-1">
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 col-m-12 col-l-12 col-p-12">
            <h2 className='glimpse-heading'>Glimpse Of Our Work</h2>
            <p className='glimpse-para'>Expo Stand Services believes in executing and delivering exceptional quality for the investment you put in trade show booth design and build. So if you are looking for an experienced exhibition stand contractor in Germany with their production unit, you have landed on the right page of an exhibition stand builder in Germany!</p>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row">

          <App2 />
          <div className="col-12 col-m-12">
          <Simple />
          </div>





        </div>
        <div className="row">
          <div className="col-4"></div>

          <div className="col-4">

            <div className="more-successful">

              
            </div>
          </div>
          <div className="col-4"></div>
        </div>

        < button className="btn"><span> <Link to="/portfolio" className='btn-link'>VIEW MORE SUCCESSFUL EXECUTION</Link></span></button>

      </div>

    </div>







  )
}

export default ArroundWorld;