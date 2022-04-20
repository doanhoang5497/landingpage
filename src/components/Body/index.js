import React from 'react'
import Section__1 from './Sections/Section__1'
import Section__2 from './Sections/Section__2'
import Section__3 from './Sections/Section__3'
import Section__4 from './Sections/Section__4'
import './Body.css'

export default function Index() {
    return (
        <div className='body'>
            <Section__1 />
            <Section__2 />
            <Section__3 />
            <Section__4 />
        </div>
    )
}
