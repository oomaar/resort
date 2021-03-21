import React, { Component } from 'react';
import { Loading, Room, Title } from '.';
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        let { loading, featuredRooms: rooms} = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        });
        
        return (
            <section className="featured-rooms">
                <Title title="Featured Rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms }
                </div>
            </section>
        );
    };
};
