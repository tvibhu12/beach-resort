import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        service:[{
        icon:<FaCocktail/>,
        title:'Free Cocktail',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        icon:<FaHiking/>,
        title:'Free Hiking',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        icon:<FaShuttleVan/>,
        title:'Free Shuttle Van',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        icon:<FaBeer/>,
        title:'Free Beer',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }]}
    render() {
        return (
            <section className='services'>
                
                <Title title='Services'/>
<div className='services-center'>
{
    this.state.service.map((item,index)=>{
return <article key={index} className='service'>
<span>{item.icon}</span>
<h6>{item.title}</h6>
<p>{item.text}</p>
</article>
    })
}

</div>
            </section>
        )
    }
}

