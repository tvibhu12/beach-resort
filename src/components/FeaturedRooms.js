import React, { Component } from 'react';
import {RoomContext} from '../Context'
export default class FeaturedRooms extends Component {
    static contextType=RoomContext;
    
    render() {
        let value= this.context;
        return (
            <div>
                FeaturedRooms {value}
            </div>
        )
    }
}
