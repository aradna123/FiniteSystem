import React from 'react'
import HeroSlider from './HeroSlider';
import Cargo from './Crago'
import Services from './services';
import AiProduct from './AiPrduct'
import IndustryPage from "../IndustryPage";


import IndustrialSection from './IndustrialSection';
import Features from './Features';
import Posts from './Posts';





const index = () => {
    return (
        <>
           

            <HeroSlider />
            <Cargo />
              <Services/>
            <AiProduct />
            
            
            <IndustrialSection/>
            <Features/>
            <Posts/>
            
        </>
    )
}

export default index