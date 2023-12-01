import { CiLocationOn } from "react-icons/ci";
import { BsClockHistory } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { SiWeightsandbiases } from "react-icons/si";

const ContactUs = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto my-10 py-5 px-5">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center text-center">
                    <div className="rounded-2xl py-3 px-20 lg:px-0">
                        <CiLocationOn className="text-4xl text-teal-400 text-center m-auto"></CiLocationOn>
                        <h1 className="text-lg py-2">Postal Address</h1>
                        <p>Unica Event Agency</p>
                        <p className="py-1">85 Fentiman Ave</p>
                        <p>Ottawa, ON K1S 0T7</p>
                    </div>
                    <div className="rounded-2xl py-3">
                        <BsClockHistory className="text-4xl text-teal-400 text-center m-auto"></BsClockHistory>
                        <h1 className="text-lg py-2">Phone & E-mail</h1>
                        <p>Phone: 1-800-64-38</p>
                        <p className="py-1">Fax: 1-800-64-39</p>
                        <p>office@fable.com</p>
                    </div>
                    <div className="rounded-2xl py-3">
                        <FiPhoneCall className="text-4xl text-teal-400 text-center m-auto"></FiPhoneCall>
                        <h1 className="text-lg py-2">Open Hours</h1>
                        <p>Monday – Friday</p>
                        <p className="py-1">8.00 am – 5.00 pm</p>
                        <p>Weekend Closed</p>
                    </div>
                    <div className="rounded-2xl py-3">
                        <SiWeightsandbiases className="text-4xl text-teal-400 text-center m-auto"></SiWeightsandbiases>
                        <h1 className="text-lg py-2">Sessions</h1>
                        <p>Mornings, 8 am – 12 noon</p>
                        <p className="py-1">Afternoons, 1 pm – 5 pm</p>
                        <p>Full Day, 8 am – 5 pm</p>
                    </div>
                </div>
            </div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leadi lg:text-5xl">Lets talk!</h2>
                        <div className="dark:text-gray-400">Vivamus in nisl metus? Phasellus.</div>
                    </div>
                    <img src="https://i.ibb.co/rxm8Dxn/customer-support.png" alt="" className="" />
                </div>
                <form className="space-y-6">
                    <div>
                        <label className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded border" />
                    </div>
                    <div>
                        <label className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded border" />
                    </div>
                    <div>
                        <label className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded border"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-violet-400 dark:text-gray-900">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;