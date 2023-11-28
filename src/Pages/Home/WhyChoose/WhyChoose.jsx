import { CiCirclePlus } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { FaCar } from "react-icons/fa";

import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const WhyChoose = () => {
    return (
        <div className="my-20">
            <SectionTitle heading={'Why Customer Choose'}></SectionTitle>
            <div className="w-2/3 m-auto text-center space-y-2 my-10">
                <h1 className="md:text-xl lg:text-4xl font-semibold">Why choose a Titan Travel tour or cruise?</h1>
                <p className="lg:text-lg">Our award-winning collection of holidays covers all seven continents, with carefully planned itineraries ranging from rail journeys and river cruises, to small-group adventures and trips exclusively for solo travellers.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-4 px-2">
                <div className="card card-compact bg-slate-200 shadow-xl transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-100 duration-500 cursor-pointer py-2">
                    <FaCar className="text-center m-auto text-xl lg:text-4xl"></FaCar>
                    <div className="card-body text-center m-auto">
                        <h2 className="card-title text-center m-auto">VIP travel service</h2>
                        <p>Smooth transfers to and from home with unlimited mileage</p>
                    </div>
                </div>
                <div className="card card-compact bg-slate-200 shadow-xl transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-100 duration-500 cursor-pointer py-2">
                    <CiStar className="text-center m-auto text-xl lg:text-4xl"></CiStar>
                    <div className="card-body text-center m-auto">
                        <h2 className="card-title text-center m-auto">More value</h2>
                        <p>From excursions to hotels, entry tickets and dining packages.</p>
                    </div>
                </div>
                <div className="card card-compact bg-slate-200 shadow-xl transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-100 duration-500 cursor-pointer py-2">
                    <CiCirclePlus className="text-center m-auto text-xl lg:text-4xl"></CiCirclePlus>
                    <div className="card-body text-center m-auto">
                        <h2 className="card-title text-center m-auto">More flexible</h2>
                        <p>Feel free to amend or extend your travel plans</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;