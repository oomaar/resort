import React, { Component } from 'react';
import { Loading, Title } from '.';
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        const { loading, featuredRooms: rooms} = this.context;

        
        return (
            <div>
                <Title title="Featured Rooms" />
                <Loading />
            </div>
        );
    };
};
