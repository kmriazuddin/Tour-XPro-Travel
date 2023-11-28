
const Banner = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/VDJZP7M/banner41.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="bg-slate-100 p-8 my-6 rounded-lg">
                        <h1 className="mb-5 text-5xl font-bold text-black">TOUR XPro</h1>
                        <p className="mb-5 text-black">Tour XPro and Travels Most Popular Tours and Travels agency in Dhaka, Bangladesh. Our Services Visa Process , Package Tours, Air Tickets, Hotel Booking.</p>
                        <button className="btn btn-success text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;