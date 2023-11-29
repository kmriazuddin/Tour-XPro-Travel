import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";
import TravelSection from "../TravelSection/TravelSection";
import Banner from "../Banner/Banner";
import ServiceCountUp from "../ServiceCountUp/ServiceCountUp";
import Testimonials from "../Testimonial/Testimonial";
import TravelAssist from "../TravelAssist/TravelAssist";
import WhyChoose from "../WhyChoose/WhyChoose";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Tour XPro Travel | Home</title>
            </Helmet>
            <Slider></Slider>
            <TravelAssist></TravelAssist>
            <TravelSection></TravelSection>
            <Banner></Banner>
            <ServiceCountUp></ServiceCountUp>
            <WhyChoose></WhyChoose>
            {/* <MeetOurGuide></MeetOurGuide> */}
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;