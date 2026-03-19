import React from 'react'
import ItStaff from './ItStaff'
import NonItStaff from './NonItStaff'
import PpcServices from './PpcServices'
import SimpleWorkProcess from './SimpleWorkProcess'

const Workforce = () => {
    return (
        <>
            <ItStaff />
            <NonItStaff />
            <SimpleWorkProcess/>
            <PpcServices />
        </>
    )
}

export default Workforce
