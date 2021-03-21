import { Banner, Hero } from "../Components";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <Hero>
            <Banner title="404" subTitle="page not found">
                <Link to="/" className="btn-primary">return to home</Link>
            </Banner>
        </Hero>
    );
};

export default Error;
