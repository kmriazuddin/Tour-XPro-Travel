import Swal from "sweetalert2";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateTour = () => {

    const { tourName, tourType, details, price, rating, _id } = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        // Image Upload To Imgbb And Then Get An URL
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // Now Send The Menu Item Data To The Server With The Image URL
            const tourItem = {
                tourName: data.tourName,
                tourType: data.tourType,
                price: parseFloat(data.price),
                details: data.details,
                rating: parseFloat(data.rating),
                image: res.data.data.display_url
            }
            // Send The Data
            const menuRes = await axiosSecure.patch(`/packages/${_id}`, tourItem);
            if (menuRes.data.modifiedCount > 0) {
                // Show Success Popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.tourName} Is Updated To The Menu!`,
                    showConfirmButton: false,
                    timer: 2500
                });
            }
        }
    };

    return (
        <div>
            <SectionTitle subHeading={'Update Tour'} heading={'Update Tour Information'}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Tour Name*</span>
                        </label>
                        <input {...register("tourName", { required: true })} defaultValue={tourName} type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select {...register('tourType', { required: true })} defaultValue={tourType} className="select select-bordered w-full">
                                <option disabled value="default">Select A Category</option>
                                <option value="asia">Asia Offers</option>
                                <option value="northAmerica">North America</option>
                                <option value="africa">Africa</option>
                                <option value="america">America</option>
                                <option value="europe">Europe</option>
                                <option value="southAmerica">South America</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input {...register("price", { required: true })} defaultValue={price} type="number" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tour Details</span>
                        </label>
                        <textarea {...register("details")} defaultValue={details} className="textarea textarea-bordered h-24" placeholder="Tour Details..."></textarea>
                    </div>
                    <div className="flex items-center gap-5">
                        <div>
                            <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-2/3">
                            <select {...register('rating', { required: true })} defaultValue={rating} className="select select-bordered w-full">
                                <option disabled value="default">Select A Rating</option>
                                <option value="1">*</option>
                                <option value="2">**</option>
                                <option value="3">***</option>
                                <option value="4">****</option>
                                <option value="5">*****</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn">Update Tour Package <IoMdAdd></IoMdAdd></button>
                </form>
            </div>
        </div>
    );
};

export default UpdateTour;