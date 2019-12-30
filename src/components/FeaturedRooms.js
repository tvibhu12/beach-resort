import React, { Component } from 'react';
import {RoomContext} from '../Context';
import Title from './Title';
import Loading from './Loading'
export default class FeaturedRooms extends Component {
    static contextType=RoomContext;
    
    render() {
        const {loading,featuredRooms:rooms}= this.context;
        return (
            <section className='featured-rooms'>
            <Title title='featured Rooms'/>
            <div className='featured-rooms-center'>
                {
                    loading?<Loading/>:'bye'
                }
            </div>
            </section>
        )
    }
}
