import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import { Title } from '.';

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, odio."
            },
            {
                icon: <FaHiking />,
                title: "Ultimate Hiking",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, odio."
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, odio."
            },
            {
                icon: <FaBeer />,
                title: "Stongest Beer",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, odio."
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        );
    };
};

export default Services;