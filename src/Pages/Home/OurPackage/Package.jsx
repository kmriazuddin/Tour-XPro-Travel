// import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useBooking from "../../../Hooks/useBooking";

const Package = ({ items }) => {
    const { image, tourName, price, _id } = items;
    const { user } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useBooking();

    const handleBooking = () => {
        if (user && user?.email) {
            // Send Cart Item To The Database
            const bookingItem = {
                menuId: _id,
                email: user.email,
                tourName,
                image,
                price
            }
            axiosSecure.post('/bookings', bookingItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // Refetch Cart To Update The Cart Items
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You Are Not Login!",
                text: "Please Login Then Add To The Cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Send The User To The Login Page
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }
    return (
        <div className="flex mb-5">
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className="bg-no-repeat bg-center" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className="text-center">{tourName}</p>
                    <div className="card-actions justify-center items-center gap-10">
                        <button className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4"><Link to={`/packages/${_id}`}>View Details</Link></button>
                        <button onClick={handleBooking} className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;