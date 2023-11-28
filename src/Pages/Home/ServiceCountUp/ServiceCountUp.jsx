import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsAward } from "react-icons/bs";
import { LiaUsersCogSolid } from "react-icons/lia";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const ServiceCountUp = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <div>
            <SectionTitle subHeading={'Travel CountUp'} heading={'Successful Travel'}></SectionTitle>
            <div className="text-center bg-slate-50 py-10 text-slate-700 font-semibold my-2">
                <ScrollTrigger className="grid md:grid-cols-2 lg:grid-cols-4 gap-5" onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <div className="bg-green-400 py-3 rounded-lg hover:text-slate-50 transition duration-700 ease-in-out cursor-pointer">
                        <AiOutlineUserAdd className="text-center m-auto text-4xl text-orange-600"></AiOutlineUserAdd>
                        <h1 className="text-4xl">{counterOn && <CountUp start={0} end={840} duration={3} delay={0}></CountUp>} + <br /><span className="text-xl">HAPPY CUSTOMERS</span></h1>
                    </div>
                    <div className="bg-green-400 py-3 rounded-lg hover:text-slate-50 transition duration-700 ease-in-out cursor-pointer">
                        <FaMapMarkedAlt className="text-center m-auto text-4xl text-orange-600"></FaMapMarkedAlt>
                        <h1 className="text-4xl">{counterOn && <CountUp start={0} end={28} duration={3} delay={0}></CountUp>} + <br /><span className="text-xl">TOTAL COUNTRY</span></h1>
                    </div>
                    <div className="bg-green-400 py-3 rounded-lg hover:text-slate-50 transition duration-700 ease-in-out cursor-pointer">
                        <BsAward className="text-center m-auto text-4xl text-orange-600"></BsAward>
                        <h1 className="text-4xl">{counterOn && <CountUp start={0} end={7} duration={3} delay={0}></CountUp>} + <br /><span className="text-xl">AWARDS WINNING</span></h1>
                    </div>
                    <div className="bg-green-400 py-3 rounded-lg hover:text-slate-50 transition duration-700 ease-in-out cursor-pointer">
                        <LiaUsersCogSolid className="text-center m-auto text-4xl text-orange-600"></LiaUsersCogSolid>
                        <h1 className="text-4xl">{counterOn && <CountUp start={0} end={120} duration={3} delay={0}></CountUp>} + <br /><span className="text-xl">WORKERS EMPLOYED</span></h1>
                    </div>
                </ScrollTrigger>
            </div>
        </div>
    );
};

export default ServiceCountUp;