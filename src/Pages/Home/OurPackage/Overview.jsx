import { useEffect, useState } from "react";
import OverviewCard from "./OverviewCard";

const Overview = () => {
    const [overview, setOverview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/overview')
            .then(res => res.json())
            .then(data => setOverview(data))
    }, []);
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center m-auto">
                {
                    overview.map(item =>
                        <OverviewCard key={item._id} items={item} className="">
                        </OverviewCard>)
                }
            </div>
        </div>
    );
};

export default Overview;