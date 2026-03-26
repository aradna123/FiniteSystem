
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
import WebsiteDevelopment from './ITServices/WebsiteDevelopment'
import ArtificalIntelligence from './ITServices/ArtificalIntelligence'
import CloudSolutions from './ITServices/CloudSolutions'
import CustomSoftware from './ITServices/CustomSoftware'
import SoftwareSolutions from './ITServices/SoftwareSolutions'
import DataSolutions from './ITServices/DataSolutions'
import HostingMaintenance from './ITServices/HostingMaintenance'
import EcommerceWebsite from './ITServices/EcommerceWebsite'
import DevopsInfrastructure from './ITServices/DevopsInfrastructure'
import Acquia from './Technologies/CMS/Acquia'
import Ezappointo from './SaaSProducts/Ezappointo'
import VivaLink from './SaaSProducts/VivaLink'









 import SEO from './DigitalSolutions/SEO';
 import PayPerClick from './DigitalSolutions/PayPerClick';
 import MetaAds from './DigitalSolutions/MetaAds'
 import SocialMediaMarketing from './DigitalSolutions/SocialMediaMarketing'




// Industries
import LocalGovernment from './Industries/LocalGovernment'
import Healthcare from './Industries/Healthcare'
import CommercialEnterprises from './Industries/CommercialEnterprises'
import LawPractice from './Industries/LawPractice'
import Retail from './Industries/Retail'
import Construction from './Industries/Construction'
import SmallBusinesses from './Industries/SmallBusinesses'
import Education from './Industries/Education'
import TeamAugmentation from './ITServices/TeamAugmentation'

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
                 <Route>
                    <Route path='/website-development' element={<WebsiteDevelopment />} />
                 </Route>
                 <Route>
                <Route path='/artifical-intelligence' element={<ArtificalIntelligence />} />
                    </Route>
                    <Route>
                       <Route path='/cloud-solutions' element={<CloudSolutions />} />
                 
                    </Route>

                     
                 
                    
                       <Route path='/custom-software' element={<CustomSoftware />} />
                 
                    
                       <Route path='/software-solutions' element={<SoftwareSolutions />} />

                       <Route path='/team-augmentation' element={<TeamAugmentation />} />

        
            
                       <Route path='/data-solutions' element={<DataSolutions />} />
                       <Route path='/hosting-maintenance' element={<HostingMaintenance />} />
                       <Route path='/ecommerce-website' element={<EcommerceWebsite />} />
                       <Route path='/devops-infrastructure' element={<DevopsInfrastructure />} />

                       
                 

                   {/* Digital Solutions */}
                <Route path='/seo' element={<SEO />} />
                <Route path='/pay-per-click' element={<PayPerClick />} />
                <Route path='/meta-ads' element={<MetaAds />} />
                <Route path='/social-media-marketing' element={<SocialMediaMarketing />} />


                {/* Technologies */}
                

<Route path='/technology/acquia' element={<Acquia />} />

              {/*SaaS Products*/}
                 <Route path='/ezappointo' element={<Ezappointo />} />
                 <Route path='/VivaLink' element={<VivaLink />} />
                

                
                
                
                

            </Routes>
                <Footer />
        </div>
    )
}

export default Frontend

