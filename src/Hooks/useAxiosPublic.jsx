import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://tour-xpro-travel.onrender.com'
});
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;