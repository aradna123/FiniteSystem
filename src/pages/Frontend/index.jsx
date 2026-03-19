
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import OurProcess from './OurProcess'
import Random from './Random'
import Workforce from './Workforce'
import Header from '../../components/Header'
import Footer from '../../components/Footer/Footer'
import MobileAppDevelopment from './ITServices/MobileAppDevelopment'



 import SEO from './DigitalSolutions/SEO';
//import SocialMediaMarketingPage from "./pages/DigitalSolutions/SocialMediaMarketingPage";
     



// Industries
import LocalGovernment from './Industries/LocalGovernment'
import Healthcare from './Industries/Healthcare'
import CommercialEnterprises from './Industries/CommercialEnterprises'
import LawPractice from './Industries/LawPractice'
import Retail from './Industries/Retail'
import Construction from './Industries/Construction'
import SmallBusinesses from './Industries/SmallBusinesses'
import Education from './Industries/Education'

const Frontend = () => {
    return (
        <div className="relative">
            <div className="absolute inset-x-0 top-0 z-50">
                <Header />
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/ourprocess' element={<OurProcess />} />
                <Route path='/random' element={<Random />} />
                <Route path='/workforce' element={<Workforce />} />

                {/* Industries */}
                <Route path='/industries/local-government' element={<LocalGovernment />} />
                <Route path='/industries/healthcare' element={<Healthcare />} />
                <Route path='/industries/commercial-enterprises' element={<CommercialEnterprises />} />
                <Route path='/industries/law-practice' element={<LawPractice />} />
                <Route path='/industries/retail' element={<Retail />} />
                <Route path='/industries/construction' element={<Construction />} />
                <Route path='/industries/small-businesses' element={<SmallBusinesses />} />
               
                <Route path='/industries/education' element={<Education />} />

                 {/* IT Services */}
                <Route path='/mobile-app-development' element={<MobileAppDevelopment />} />


                   {/* Digital Solutions */}
                <Route path='/seo' element={<SEO />} />
                
                
                
                


            </Routes>
                <Footer />
        </div>
    )
}

export default Frontend

