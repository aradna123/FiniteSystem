import React from 'react'
import Hero from './Hero'
// import Team from './Team'
// import Why from './Why'
import OurAssesment from './OurAssesment'
import CaseStudies from './CaseStudies'
// import DevelopmentProcess from './DevelopmentProcess'
import ExclussiveAgency from './ExclussiveAgency'
// import DigitalExperience from './DigitalExperience'
import AwesomeService from './AwesomeService'
import Offer from './Offer'
// import InspireGrowth from './InspireGrowth'
// import Aicomponent from './Aicomponent'
// import Growth from './Growth'
// import DataCenter from './DataCenter'
import Driven from './Driven'
// import DigitalMarketing from './DigitalMarketing'
import Pricing from './Pricing'
import News from './News'
import ClientSays from './ClientSays'
import Courage from './Courage'
import Tailored from './Tailored'
import Agencies from './Agencies'
import Why from './Why'
import Blog from './Blog'

const index = () => {
    return (
        <>
            <section id="hero"><Hero /></section>
            <section id="about"><ExclussiveAgency /></section>
            <section id="strategy"><OurAssesment /></section>
            {/* <InspireGrowth /> */}
            <Agencies />
            <section id="creative"><Offer /></section>
            <Tailored />
            <Why />
            <Blog/>
            <section id="news"><News /></section>
            <section id="case-studies"><CaseStudies /></section>
            <AwesomeService />
            <Driven />
            <section id="pricing"><Pricing /></section>
            <ClientSays />
            <section id="lets-talk"><Courage /></section>

        </>
    )
}

export default index