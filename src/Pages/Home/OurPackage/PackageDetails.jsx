import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
const PackageDetails = () => {
    const [packagesDetails, setPackagesDetails] = useState(null);
    const [isLoading, setIsLoading] = useState([]);

    const apiPackagesDetails = useLoaderData();

    const { id } = useParams();    

    useEffect(() => {
        setIsLoading(true);
        if (id) {
            let product = apiPackagesDetails?.find((product) => product?._id === id);
            if (product) {
                setPackagesDetails(product);
            } else {
                setPackagesDetails(null);
            }
        } else {
            setPackagesDetails(null);
        }
        setIsLoading(false);
    }, []);

        
    return (
        <div>
            {
                isLoading ? <p>Loading.....</p> : <div className="max-w-7xl mx-auto bg-green-50">
                    {
                        packagesDetails ? <>
                            <div className="py-14 lg:py-16 px-2">
                                <div className="">
                                    <div>
                                        <img className="w-full h-96 rounded-sm" src={packagesDetails?.image} alt="" />
                                    </div>
                                    <div className="space-y-5">
                                        <h2 className="text-lg md:text-xl lg:text-3xl font-bold my-2"> {packagesDetails.tourName}</h2>
                                        <h2 className="text-lg md:text-xl lg:text-2xl my-2"><span className="font-semibold">Travel Destination:</span> {packagesDetails.tourType}</h2>
                                        <h2 className="text-lg md:text-xl lg:text-2xl my-2"><span className="font-semibold">Package Price:</span> {packagesDetails.price}$</h2>
                                        <h2 className="text-lg md:text-xl lg:text-2xl my-2"><span className="font-semibold">Package Rating:</span> {packagesDetails.rating}*</h2>
                                        <p className="text-lg md:text-xl lg:text-2xl my-2"><span className="font-semibold">Package Details:</span> {packagesDetails.details}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                            : <p>No Products Found</p>
                    }
                </div>
            }
        </div>
    );
};

export default PackageDetails;