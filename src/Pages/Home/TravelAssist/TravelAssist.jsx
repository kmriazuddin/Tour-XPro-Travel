import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { MdOutlineLocalBar } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { TbZoomPan } from "react-icons/tb";
import { MdHotel } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { CgGym } from "react-icons/cg";



const TravelAssist = () => {
    return (
        <div className="mt-28">
            <SectionTitle subHeading={'Place Destination & Others'} heading={'Discover Nearby'}></SectionTitle>
            <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-4 px-3">
                <div className="card card-compact bg-green-400 shadow-xl transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-500 cursor-pointer hover:text-slate-100 py-2">
                    <FaHotel className="text-center m-auto text-xl lg:text-4xl"></FaHotel>
                    <div className="card-body text-center m-auto">
                        <h2 className="card-title text-center m-auto">Places</h2>
                        <p>(300+ Listings)</p>
                    </div>
                </div>
                <div className="card card-compact bg-green-400 shadow-xl transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-500 cursor-pointer hover:text-slate-100 py-2">
                    <TbZoomPan className="text-center m-auto text-xl lg:text-4xl"></TbZoomPan>
                    <div className="card-body text-center m-auto">
                        <h2 className="card-title">Destination</h2>
                        <p>(280+ Listing)</p>
                    </div>
                </div>
                <div className="card card-compact bg-green-400 shadow-xl transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-500 cursor-pointer hover:text-slate-100 py-2">
                    <CgGym className="text-center m-auto text-xl lg:text-4xl"></CgGym>
                    <div className="card-body text-center m-auto">
                        <h2 className="card-title">Fitness & Gym</h2>
                        <p>(200+ Listing)</p>
                    </div>
                </div>
                <div className="card card-compact bg-green-400 shadow-xl transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-500 cursor-pointer hover:text-slate-100 py-2">
                    <MdHotel className="text-center m-auto text-xl lg:text-4xl"></MdHotel>
                    <div className="card-body text-center m-auto">
                        <h2 className="card-title">Hotel & Stay</h2>
                        <p>(1000+ Listing)</p>
                    </div>
                </div>
                <div className="card card-compact bg-green-400 shadow-xl transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-500 cursor-pointer hover:text-slate-100 py-2">
                    <FaShoppingBag className="text-center m-auto text-xl lg:text-4xl"></FaShoppingBag>
                    <div className="card-body text-center m-auto">
                        <h2 className="card-title">Shopping</h2>
                        <p>(1000+ Listing)</p>
                    </div>
                </div>
                <div className="card card-compact bg-green-400 shadow-xl transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-500 cursor-pointer hover:text-slate-100 py-2">
                    <MdOutlineLocalBar className="text-center m-auto text-xl lg:text-4xl"></MdOutlineLocalBar>
                    <div className="card-body text-center m-auto">
                        <h2 className="card-title">Pub & Bar</h2>
                        <p>(50+ Listing)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelAssist;