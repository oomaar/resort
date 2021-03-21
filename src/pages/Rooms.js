import { Link } from "react-router-dom";
import { Banner, Hero } from "../Components";

const Rooms = () => {
    return (
        <Hero hero="roomsHero">
            <Banner title="Our Rooms">
                <Link to="/" className="btn-primary">Return Home</Link>
            </Banner>
        </Hero>
    );
};

export default Rooms;
