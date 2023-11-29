import { Link } from "react-router-dom";
import useBooking from "../../../Hooks/useBooking";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { MdAutoDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Booking = () => {
    const [booking, refetch] = useBooking();
    const totalPrice = booking.reduce((total, booking) => total + booking.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result);
            if (result.isConfirmed) {
                axiosSecure.delete(`/bookings/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <SectionTitle subHeading={'My Booking'} heading={'Wanna Add More?'}></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Items: {booking?.length}</th>
                            <th>Total Price: {totalPrice}</th>
                            { booking.length ? <Link to="/dashboard/payment"><button className="btn btn-primary btn-sm">Pay</button></Link> : <button disabled className="btn btn-primary btn-sm">Pay</button>}
                        </tr>
                        <tr>
                            <th>
                                Total: {booking.length}
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map((book, index) => <tr key={book._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="w-28 h-16">
                                                <img src={book?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {book?.tourName}
                                </td>
                                <td>$ {book?.price}</td>
                                <button onClick={() => handleDelete(book._id)} className="btn btn-ghost"><MdAutoDelete className="text-4xl text-red-500" /></button>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Booking;