import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import MajorExhibitingCities from './Components/Pages/MajorExhibitingCities';
import Portfolio from './Components/Pages/Portfolio';
import TradeShowCalendar from './Components/Pages/TradeShowCalendar';
import Home from './Components/Pages/Home'
import Comapny from './Components/Pages/CompanyProfile';
import Germany from './Components/Pages/pages2/Abudhabi';
import Contactus from './Components/Pages/Contactus';
import GlobalPrint from './Components/Pages/Aboutdroppages/GlobalFootprint';
import OurTeam from './Components/Pages/Aboutdroppages/OurTeam';
import ClientTestimonial from './Components/Pages/Aboutdroppages/ClientTestimonial';
import customstand from './Components/Pages/ExhibitionStanddroppages/CustomStand';
import DoubleDecker from './Components/Pages/ExhibitionStanddroppages/DoubleDecker';
import GermanyExhibition from './Components/Pages/GlobalPresense/GermanyExhibition';
import Dubai from '../src/Components/Pages/majorcitespages/Dubai'
import Blog from './Components/Pages/Contenthubpages/Blog';
import StandBuilder from '../src/Components/Pages/Contenthubpages/StandBuilder';
import AudioVisual from '../src/Components/Pages/Contenthubpages/AudioVisual'
import StandDesign from './Components/Pages/Contenthubpages/StandDesign';
import ExhibitionConstruction from './Components/Pages/Contenthubpages/ExhibitionConstruction';
import GraphicProduction from './Components/Pages/Contenthubpages/GraphicProduction';
import Pavilion from './Components/Pages/ExhibitionStanddroppages/Pavilion';
import Modular from './Components/Pages/ExhibitionStanddroppages/Modular';
import Management from './Components/Pages/Contenthubpages/Managment';
import Installing from './Components/Pages/Contenthubpages/Installing';
import Uk from './Components/Pages/GlobalPresense/Uk';
import Netherland from './Components/Pages/GlobalPresense/Netherland';
import France from './Components/Pages/GlobalPresense/France';
import Italy from './Components/Pages/GlobalPresense/Italy';
import Spain from './Components/Pages/GlobalPresense/Spain';
import China from './Components/Pages/GlobalPresense/China';
import Switzerland from './Components/Pages/GlobalPresense/Switzerland';
import Thailand from './Components/Pages/GlobalPresense/Thailand';

import Capetown from './Components/Pages/majorcitespages/Capetown';
import Madrid from './Components/Pages/majorcitespages/Madrid';
import Amesterdam from './Components/Pages/majorcitespages/Amesterdam';
import Barcelona from './Components/Pages/majorcitespages/Barcelona';
import Bangkok from './Components/Pages/majorcitespages/Bangkok';
import Beijing from './Components/Pages/majorcitespages/Biejing';
import Berlin from './Components/Pages/majorcitespages/Berlin';
import Bern from './Components/Pages/majorcitespages/Bern';
import Bolgana from './Components/Pages/majorcitespages/Bolgana';
import Birmingham from './Components/Pages/majorcitespages/Birmingham';
import Basel from './Components/Pages/majorcitespages/Basel';
import Brussels from './Components/Pages/majorcitespages/Brussels';
import Cannes from './Components/Pages/majorcitespages/Cannes';
import Copenhagen from './Components/Pages/majorcitespages/Copenhagen';
import Cologne from './Components/Pages/majorcitespages/Cologne';
import Dortmund from './Components/Pages/majorcitespages/Dortmund';
import Dusseldorf from './Components/Pages/majorcitespages/Dusseldorf';
import Essen from './Components/Pages/majorcitespages/Essen';
import Frankfurt from './Components/Pages/majorcitespages/Frankfurt';
import Geneva from './Components/Pages/majorcitespages/Geneva';
import Hamburg from './Components/Pages/majorcitespages/Hamburg';
import Hannover from './Components/Pages/majorcitespages/Hannover';
import Istanbul from './Components/Pages/majorcitespages/Istanbul';
import JohanBurg from './Components/Pages/majorcitespages/JohanBurg';
import Leipzig from './Components/Pages/majorcitespages/Leip';
import London from './Components/Pages/majorcitespages/London';
import Lyon from './Components/Pages/majorcitespages/Lyon';
import Miami from './Components/Pages/majorcitespages/Miami';
import Milan from './Components/Pages/majorcitespages/Milan';
import Newyork from './Components/Pages/majorcitespages/Newyork';
import Nuremberg from './Components/Pages/majorcitespages/Nuremberg';
import Paris from './Components/Pages/majorcitespages/Paris';
import Poznan from './Components/Pages/majorcitespages/Poznan';
import Rotterdam from './Components/Pages/majorcitespages/Rotterdam';
import Saupaulo from './Components/Pages/majorcitespages/Saupaulo';
import Satters from './Components/Pages/majorcitespages/Satters';
import Shanghai from './Components/Pages/majorcitespages/Shanghai';
import Stutt from './Components/Pages/majorcitespages/Stutt';
import Utrecht from './Components/Pages/majorcitespages/Utrecht';
import Verona from './Components/Pages/majorcitespages/Verona';
import Warsaw from './Components/Pages/majorcitespages/Warsaw';
import Vienna from './Components/Pages/majorcitespages/Vienna';
import PSI from './Components/Pages/Tradeshowinnerpages/Psi';
import Hexi from './Components/Pages/Tradeshowinnerpages/Hexi';
import Imm from './Components/Pages/Tradeshowinnerpages/imm';
import Livingkitchen from './Components/Pages/Tradeshowinnerpages/Livingkitchen';
import Boot from './Components/Pages/Tradeshowinnerpages/Boot';
import Fitur from './Components/Pages/Tradeshowinnerpages/Fitur';
import DesignDelivery from './Components/DesignDelivery';
import ScrollToTop from './Components/ScrollToTop';
import Chris from './Components/Pages/Tradeshowinnerpages/Chris';
import Paper from './Components/Pages/Tradeshowinnerpages/Paper';
import Ambin from './Components/Pages/Tradeshowinnerpages/Ambin';
import Creative from './Components/Pages/Tradeshowinnerpages/Creative';
import Toyfair from './Components/Pages/Tradeshowinnerpages/Toyfair';
import Integrated from './Components/Pages/Tradeshowinnerpages/Integrated';
import Fruit from './Components/Pages/Tradeshowinnerpages/Fruit';
import Bio from './Components/Pages/Tradeshowinnerpages/Bio';
import India from './Components/Pages/GlobalPresense/India';
import Inhorgenta from './Components/Pages/Tradeshowinnerpages/Inhorgenta';
import Euroshop from './Components/Pages/Tradeshowinnerpages/Euroshop';
import ASia from './Components/Pages/Tradeshowinnerpages/Asia';
import Asia from './Components/Pages/Tradeshowinnerpages/Asia';
import Outdoor from './Components/Pages/Tradeshowinnerpages/Outdoor';
import itbberlin from './Components/Pages/Tradeshowinnerpages/itbberlin';
import Internorga from './Components/Pages/Tradeshowinnerpages/Internorga';
import Ish from './Components/Pages/Tradeshowinnerpages/Ish';
import IceEurope from './Components/Pages/Tradeshowinnerpages/IceEurope';
import Ids from './Components/Pages/Tradeshowinnerpages/Ids';
import Packag from './Components/Pages/Tradeshowinnerpages/Packag';
import Rt from './Components/Pages/Tradeshowinnerpages/Rt';
import Cosm from './Components/Pages/Tradeshowinnerpages/Cosm';
import Add from './Components/Pages/Tradeshowinnerpages/Add';
import Tire from './Components/Pages/Tradeshowinnerpages/Tire';
import Fasten from './Components/Pages/Tradeshowinnerpages/Fasten';
import Show from './Components/Pages/Tradeshowinnerpages/Show';
import Mip from './Components/Pages/Tradeshowinnerpages/Mip';
import Tophair from './Components/Pages/Tradeshowinnerpages/Tophair';
import Fibo from './Components/Pages/Tradeshowinnerpages/Fibo';
import Messe from './Components/Pages/Tradeshowinnerpages/Messe';
import Beaut from './Components/Pages/Tradeshowinnerpages/Beaut';
import Logimat from './Components/Pages/Tradeshowinnerpages/Logimat';
import Ism from './Components/Pages/Tradeshowinnerpages/Ism';
import Prolight from './Components/Pages/Tradeshowinnerpages/Prolight';
import Shishamesse from './Components/Pages/Tradeshowinnerpages/Shishamesse';
import Interpack from './Components/Pages/Tradeshowinnerpages/Interpack';
import Smt from './Components/Pages/Tradeshowinnerpages/Smt';
import Prs from './Components/Pages/Tradeshowinnerpages/Prs';
import Control from './Components/Pages/Tradeshowinnerpages/Control';
import Interzum from './Components/Pages/Tradeshowinnerpages/Interzum';
import Isc from './Components/Pages/Tradeshowinnerpages/Isc';
import Cwi from './Components/Pages/Tradeshowinnerpages/Cwi';
import Anga from './Components/Pages/Tradeshowinnerpages/Anga';
import Chemis from './Components/Pages/Tradeshowinnerpages/Chemis';
import Money from './Components/Pages/Tradeshowinnerpages/Money';
import Solar from './Components/Pages/Tradeshowinnerpages/Solar';
import Autom from './Components/Pages/Tradeshowinnerpages/Autom';
import Eurobike from './Components/Pages/Tradeshowinnerpages/Eurobike';
import Gamezone from './Components/Pages/Tradeshowinnerpages/Gamezone';
import Ifa from './Components/Pages/Tradeshowinnerpages/Ifa';
import Gas from './Components/Pages/Tradeshowinnerpages/Gas';
import Label from './Components/Pages/Tradeshowinnerpages/Label';
import Tabac from './Components/Pages/Tradeshowinnerpages/Tabac';
import Ibc from './Components/Pages/Tradeshowinnerpages/Ibc';
import Emo from './Components/Pages/Tradeshowinnerpages/Emo';
import Sibbos from './Components/Pages/Tradeshowinnerpages/Sibbos';
import Cms from './Components/Pages/Tradeshowinnerpages/Cms';
import Arab from './Components/Pages/Tradeshowinnerpages/Arab';
import Exco from './Components/Pages/Tradeshowinnerpages/Exco';
import Londonp from './Components/Pages/Tradeshowinnerpages/Londonp';
import Lapaexp from './Components/Pages/Tradeshowinnerpages/Lapaexp';
import Autodubai from './Components/Pages/Tradeshowinnerpages/Autodubai';
import Exporeal from './Components/Pages/Tradeshowinnerpages/Exporeal';
import Adipec from './Components/Pages/Tradeshowinnerpages/Adipec';
import Intergeo from './Components/Pages/Tradeshowinnerpages/Intergeo';
import { Move } from 'react-scroll-motion';
import Moves from './Components/Pages/Tradeshowinnerpages/Moves';
import Interlift from './Components/Pages/Tradeshowinnerpages/Interlift';
import Frankf from './Components/Pages/Tradeshowinnerpages/Frankf';

import Iba from './Components/Pages/Tradeshowinnerpages/Iba';
import Cphiba from './Components/Pages/Tradeshowinnerpages/Cphiba';
import Parcel from './Components/Pages/Tradeshowinnerpages/Parcel';
import Aqualane from './Components/Pages/Tradeshowinnerpages/Aqualane';
import Adussel from './Components/Pages/Tradeshowinnerpages/Adussel';
import Blechexpo from './Components/Pages/Tradeshowinnerpages/Blechexpo';
import Semicon from './Components/Pages/Tradeshowinnerpages/Semicon';
import Agri from './Components/Pages/Tradeshowinnerpages/Agri';
import Medica from './Components/Pages/Tradeshowinnerpages/Medica';
import Costmetic from './Components/Pages/Tradeshowinnerpages/Costmetic';
import Product from './Components/Pages/Tradeshowinnerpages/Product';
import Ibe from './Components/Pages/Tradeshowinnerpages/Ibe';
import Ibtm from './Components/Pages/Tradeshowinnerpages/Ibtm';
import Brau from './Components/Pages/Tradeshowinnerpages/Brau';
import Ispomunich from './Components/Pages/Tradeshowinnerpages/Ispomunich';
import Enlit from './Components/Pages/Tradeshowinnerpages/Enlit';
import Light from './Components/Pages/Tradeshowinnerpages/Light';
import Essfair from './Components/Pages/Tradeshowinnerpages/Essfair';
import Fenster from './Components/Pages/Tradeshowinnerpages/Fenster';
import Wire from './Components/Pages/Tradeshowinnerpages/Wire';
import Tube from './Components/Pages/Tradeshowinnerpages/Tube';
import Cemat from './Components/Pages/Tradeshowinnerpages/Cemat';
import Analytic from './Components/Pages/Tradeshowinnerpages/Analytic';
import Showcase from './Components/Pages/Tradeshowinnerpages/Showcase';
import Ittrains from './Components/Pages/Tradeshowinnerpages/Ittrains';
import Interclean from './Components/Pages/Tradeshowinnerpages/Interclean';
import Smm from './Components/Pages/Tradeshowinnerpages/Smm';
import Amb from './Components/Pages/Tradeshowinnerpages/Amb';
import Esse from './Components/Pages/Tradeshowinnerpages/Esse';
import Wind from './Components/Pages/Tradeshowinnerpages/Wind';
import Chill from './Components/Pages/Tradeshowinnerpages/Chill';
import Vision from './Components/Pages/Tradeshowinnerpages/Vision';
import Glasstech from './Components/Pages/Tradeshowinnerpages/Glasstech';
import Euroblech from './Components/Pages/Tradeshowinnerpages/Euroblech';
import Iffaa from './Components/Pages/Tradeshowinnerpages/Iffaa';
import Kshow from './Components/Pages/Tradeshowinnerpages/Kshow';
import Domotex from './Components/Pages/Tradeshowinnerpages/Domotex';
import Electronica from './Components/Pages/Tradeshowinnerpages/Electronica';
import Munich from './Components/Pages/majorcitespages/Munich';
import { Helmet } from 'react-helmet';



// import ArroundWorld from './Components/ArroundWorld';








const App =() =>{


  return (
    <Router>
      <Helmet>
      <title>Exhibition Booth Builder &amp; contractor, Company in Germany</title>
	<meta name="description" content="ESS is a leading Exhibition Stand Design and Build company in Germany. We have our own in-house team for exhibition stand builder and design." />
	<link rel="canonical" href="https://www.expostandservice.com/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Home" />
	<meta property="og:description" content="ESS is a leading Exhibition Stand Design and Build company in Germany. We have our own in-house team for exhibition stand builder and design." />
	<meta property="og:url" content="https://www.expostandservice.com/" />
	<meta property="og:site_name" content="Expo Stand Services Sp. z o.o." />
	<meta property="article:publisher" content="https://www.facebook.com/expostandservice" />
	<meta property="article:modified_time" content="2023-09-02T09:37:11+00:00" />
	<meta property="og:image" content="https://www.expostandservice.com/wp-content/uploads/2023/05/mobile-banner-expo.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@expostandservic" />
	<meta name="twitter:label1" content="Est. reading time" />
	<meta name="twitter:data1" content="7 minutes" />
	<meta name="msvalidate.01" content="425BD9D9F706B35517CD7CD0786DADDF" />
	<meta name="google-site-verification" content="ffxEEYgunQOODmvASucQ4UTyVF5D2wkg3r_UWfb_PMU" />
      </Helmet>
      <ScrollToTop/>
      <Navbar/>
  
      <Routes>

        <Route path='/' exact Component={Home}/>
        <Route path='/delivery' exact Component={DesignDelivery}/>
        <Route path='/major-exhibiting-cities' exact Component={MajorExhibitingCities}/>
        <Route path='/trade-shows-calender' exact Component={TradeShowCalendar}/>
        <Route path='/portfolios' exact Component={Portfolio}/>
        <Route path='/company-profile' exact Component={Comapny}/>
        <Route path='/global-presence' exact Component={GlobalPrint}/>
        <Route path='/our-team' exact Component={OurTeam}/>
        <Route path='/client-testimonial' exact Component={ClientTestimonial}/>
        <Route path='/contact-us' exact Component={Contactus}/>
        <Route path='/custom-exhibition-stand' exact Component={customstand}/>
        <Route path='/double-decker-exhibition-stands' exact Component={DoubleDecker}/>
        <Route path='/exhibition-stand-designs-in-germany' exact Component={GermanyExhibition}/>
        <Route path='/abudhabi' exact Component={Germany}/>
        <Route path='/exhibition-stand-contractor-in-dubai' exact Component={Dubai}/>
        <Route path='/blog' exact Component={Blog}/>
        <Route path='/exhibition-stand-builder' exact Component={StandBuilder}/>
        <Route path='/exhibition-stand-audio-visual' exact Component={AudioVisual}/>
        <Route path='/exhibition-stand-design' exact Component={StandDesign}/>
        <Route path='/country-pavilion-exhibition-design' exact Component={Pavilion}/>
        <Route path='/portable-modular-exhibition-stand' exact Component={Modular}/>
        <Route path='/exhibition-stand-construction' exact Component={ExhibitionConstruction}/>
        <Route path='/exhibition-graphic-designing-and-production' exact Component={GraphicProduction}/>
        <Route path='/exhibition-stand-management' exact Component={Management}/>
        <Route path='/exhibition-stand-installation-dismantling' exact Component={Installing}/>
        <Route path='/exhibition-stand-contractor-in-uk' exact Component={Uk}/>
        <Route path='/exhibition-stand-design-in-netherlands' exact Component={Netherland}/>
        <Route path='/booth-stand-design-company-in-france' exact Component={France}/>
        <Route path='/exhibition-stand-design-company-in-italy' exact Component={Italy}/>
        <Route path='/exhibition-design-company-in-spain' exact Component={Spain}/>
        <Route path='/exhibition-stand-design-in-china' exact Component={China}/>
        <Route path='/exhibition-design-company-in-switzerland' exact Component={Switzerland}/>
        <Route path='/exhibition-stand-design-in-thailand' exact Component={Thailand}/>
        <Route path='/exhibition-stall-design-company-in-india' exact Component={India}/>

        <Route path='/capetown' exact Component={Capetown}/>
        <Route path='/madrid' exact Component={Madrid}/>
        <Route path='/amsterdam' exact Component={Amesterdam}/>
        <Route path='/barcelona' exact Component={Barcelona}/>
        <Route path='/bangkok' exact Component={Bangkok}/>
        <Route path='/beijing' exact Component={Beijing}/>
        <Route path='/berlin' exact Component={Berlin}/>
        <Route path='/bern' exact Component={Bern}/>
        <Route path='/bolgana' exact Component={Bolgana}/>
        <Route path='/birmingham' exact Component={Birmingham}/>
        <Route path='/basel' exact Component={Basel}/>
        <Route path='/brussels' exact Component={Brussels}/>
        <Route path='/cannes' exact Component={Cannes}/>
        <Route path='/copenhagen' exact Component={Copenhagen}/>
        <Route path='/cologne' exact Component={Cologne}/>
        <Route path='/dortmund' exact Component={Dortmund}/>
        <Route path='/dusseldorf' exact Component={Dusseldorf}/>
        <Route path='/essen' exact Component={Essen}/>
        <Route path='/frank' exact Component={Frankfurt}/>
        <Route path='/geneva' exact Component={Geneva}/>
        <Route path='/hamburg' exact Component={Hamburg}/>
        <Route path='/hannover' exact Component={Hannover}/>
        <Route path='/istanbul' exact Component={Istanbul}/>
        <Route path='/johan' exact Component={JohanBurg}/>
        <Route path='/leipzig' exact Component={Leipzig}/>
        <Route path='/london' exact Component={London}/>
        <Route path='/lyon' exact Component={Lyon}/>
        <Route path='/miami' exact Component={Miami}/>
        <Route path='/milan' exact Component={Munich}/>
        <Route path='/munich' exact Component={Munich}/>
        <Route path='/nuremberg' exact Component={Nuremberg}/>        
        <Route path='/paris' exact Component={Paris}/>        
        <Route path='/poznan' exact Component={Poznan}/>        
        <Route path='/ratter' exact Component={Rotterdam}/>        
        <Route path='/sau' exact Component={Saupaulo}/>        
        <Route path='/satte' exact Component={Satters}/>        
        <Route path='/shanghai' exact Component={Shanghai}/>        
        <Route path='/stutt' exact Component={Stutt}/>        
        <Route path='/utrecht' exact Component={Utrecht}/>        
        <Route path='/verona' exact Component={Verona}/>        
        <Route path='/veinna' exact Component={Vienna}/>        
        <Route path='/warsaw' exact Component={Warsaw}/>  

        <Route path='/psi' exact Component={PSI}/>        
        <Route path='/hexi' exact Component={Hexi}/>        
        <Route path='/imm' exact Component={Imm}/>        
        <Route path='/living' exact Component={Livingkitchen}/>        
        <Route path='/boot' exact Component={Boot}/>        
        <Route path='/fitur' exact Component={Fitur}/>       
        <Route path='/chris' exact Component={Chris}/>       
       <Route path='/paper' exact Component={Paper}/> 
       <Route path='/ambin' exact Component={Ambin}/> 
       <Route path='/creative' exact Component={Creative}/> 
       <Route path='/toyfair' exact Component={Toyfair}/> 
       <Route path='/inte' exact Component={Integrated}/> 
       <Route path='/fruit' exact Component={Fruit}/> 
       <Route path='/biofach' exact Component={Bio}/> 
       <Route path='/inhergenta' exact Component={Inhorgenta}/> 
       <Route path='/euro' exact Component={Euroshop}/> 
       <Route path='/asia' exact Component={Asia}/>
       <Route path='/outdoor' exact Component={Outdoor}/>
       <Route path='/itb' exact Component={itbberlin}/>
       <Route path='/interh' exact Component={Internorga}/>
       <Route path='/ish' exact Component={Ish}/>
       <Route path='/europe' exact Component={IceEurope}/>
       <Route path='/ids' exact Component={Ids}/>
       <Route path='/package' exact Component={Packag}/>
       <Route path='/rt' exact Component={Rt}/>
       <Route path='/cosmo' exact Component={Cosm}/>
       <Route path='/add' exact Component={Add}/>
       <Route path='/tire' exact Component={Tire}/>
       <Route path='/fasten' exact Component={Fasten}/>
       <Route path='/show' exact Component={Show}/>
       <Route path='/mip' exact Component={Mip}/>
       <Route path='/tophair' exact Component={Tophair}/>
       <Route path='/fibo' exact Component={Fibo}/>
       <Route path='/messe' exact Component={Messe}/>
       <Route path='/beaut' exact Component={Beaut}/>
       <Route path='/logimat' exact Component={Logimat}/>
       <Route path='/ism' exact Component={Ism}/>
       <Route path='/prolight' exact Component={Prolight}/>
       <Route path='/shishamesse' exact Component={Shishamesse}/>
       <Route path='/interpack' exact Component={Interpack}/>
       <Route path='/smt' exact Component={Smt}/>
       <Route path='/prs' exact Component={Prs}/>
       <Route path='/control' exact Component={Control}/>
       <Route path='/interzum' exact Component={Interzum}/>
       <Route path='/isc' exact Component={Isc}/>
       <Route path='/cwi' exact Component={Cwi}/>
       <Route path='/anga' exact Component={Anga}/>
       <Route path='/chemis' exact Component={Chemis}/>
       <Route path='/money' exact Component={Money}/>
       <Route path='/solar' exact Component={Solar}/>
       <Route path='/autom' exact Component={Autom}/>
       <Route path='/eurobike' exact Component={Eurobike}/>
       <Route path='/gamezone' exact Component={Gamezone}/>
       <Route path='/ifa' exact Component={Ifa}/>
       <Route path='/gas' exact Component={Gas}/>
       <Route path='/lab' exact Component={Label}/>
       <Route path='/tabac' exact Component={Tabac}/>
       <Route path='/ibc' exact Component={Ibc}/>
       <Route path='/emo' exact Component={Emo}/>
       <Route path='/sibbos' exact Component={Sibbos}/>
       <Route path='/cms' exact Component={Cms}/>
       <Route path='/arab' exact Component={Arab}/>
       <Route path='/exco' exact Component={Exco}/>
       <Route path='/londonp' exact Component={Londonp}/>
       <Route path='/lapaexp' exact Component={Lapaexp}/>
       <Route path='/autodubai' exact Component={Autodubai}/>
       <Route path='/exporeal' exact Component={Exporeal}/>
       <Route path='/adipec' exact Component={Adipec}/>
       <Route path='/intergeo' exact Component={Intergeo}/>
       <Route path='/moves' exact Component={Moves}/>
       <Route path='/interlift' exact Component={Interlift}/>
       <Route path='/frankf' exact Component={Frankf}/>
       <Route path='/electronica' exact Component={Electronica}/>

      
       <Route path='/iba' exact Component={Iba}/>
       <Route path='/cphiba' exact Component={Cphiba}/>
       <Route path='/parcel' exact Component={Parcel}/>
       <Route path='/aqualane' exact Component={Aqualane}/>
       <Route path='/adussel' exact Component={Adussel}/>
       <Route path='/blechexpo' exact Component={Blechexpo}/>
       <Route path='/semicon' exact Component={Semicon}/>
       <Route path='/agri' exact Component={Agri}/>
       <Route path='/medica' exact Component={Medica}/>
       <Route path='/costmetic' exact Component={Costmetic}/>
       <Route path='/product' exact Component={Product}/>
       <Route path='/ibe' exact Component={Ibe}/>
       <Route path='/ibtm' exact Component={Ibtm}/>
       <Route path='/brau' exact Component={Brau}/>
       <Route path='/ispo' exact Component={Ispomunich}/>
       <Route path='/enlit' exact Component={Enlit}/>
       <Route path='/light' exact Component={Light}/>
       <Route path='/essfair' exact Component={Essfair}/>
       <Route path='/fenster' exact Component={Fenster}/>
       <Route path='/wire' exact Component={Wire}/>
       <Route path='/tube' exact Component={Tube}/>
       <Route path='/cemat' exact Component={Cemat}/>
       <Route path='/analytic' exact Component={Analytic}/>
       <Route path='/showcase' exact Component={Showcase}/>
       <Route path='/ittrains' exact Component={Ittrains}/>
       <Route path='/interclean' exact Component={Interclean}/>
       <Route path='/smm' exact Component={Smm}/>
       <Route path='/amb' exact Component={Amb}/>
       <Route path='/esse' exact Component={Esse}/>
       <Route path='/wind' exact Component={Wind}/>
       <Route path='/chill' exact Component={Chill}/>
       <Route path='/vision' exact Component={Vision}/>
       <Route path='/glastech' exact Component={Glasstech}/>
       <Route path='/euroblech-hannover/' exact Component={Euroblech}/>
       <Route path='/iffaa' exact Component={Iffaa}/>
       <Route path='/kshow' exact Component={Kshow}/>
       <Route path='/domotex' exact Component={Domotex}/>
       

    


             

        
      </Routes>
     
      {/* <Main/> */}




      
     
   
    
      
   
    </Router>
  )
}

export default App
