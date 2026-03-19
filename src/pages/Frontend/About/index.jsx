import React from 'react'
import Hero from './Hero'
import Team from './Teams'
import DigitalExperience from './DigitalExperience'
import DevelopmentProcess from './DevelopmentProcess'
import DataCenter from './DataCenter'
import DigitalMarketing from './DigitalMarketing'


const About = () => {
    return (
        <>
            <Hero />
            <DigitalExperience />
            <Team />
            <DataCenter />
            <DevelopmentProcess />
            <DigitalMarketing />
        </>
    )
}

export default About