import { Banner, FeaturedRooms, Hero, Services } from "../Components";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Hero>
                <Banner title="luxurious rooms" subTitle="deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">our rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    );
};

export default Home;
