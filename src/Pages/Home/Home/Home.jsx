import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";
import TravelSection from "../TravelSection/TravelSection";
import Banner from "../Banner/Banner";
import OurPackage from "../OurPackage/OurPackage";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Tour XPro Travel | Home</title>
            </Helmet>
            <Slider></Slider>
            <TravelSection></TravelSection>
            <Banner></Banner>
            <OurPackage></OurPackage>
        </div>
    );
};

export default Home;