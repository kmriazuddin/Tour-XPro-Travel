import usePackage from "../../../Hooks/usePackage";
import Package from "./Package";

const OurPackage = () => {
    const [packages] = usePackage();
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    packages.map(item =>
                        <Package key={item._id} items={item} className="">
                        </Package>)
                }
            </div>
        </div>
    );
};

export default OurPackage;