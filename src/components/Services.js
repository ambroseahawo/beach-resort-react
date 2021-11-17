import React from 'react'
import { ServicesData } from '../ServicesData'
import Title from './Title'

const Services = () => {
    return (
        <section class="services">
            <Title title="services"/>
            <div class="services-center">
                {ServicesData.map((item, index) => {
                    return(
                        <article key={index} class="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Services
