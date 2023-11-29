// import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const usePackage = () => {
//     const [packages, setPackage] = useState([]);
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {
//         fetch('http://localhost:8000/packages')
//         .then(res => res.json())
//         .then(data => {
//             setPackage(data);
//             setLoading(false);
//         });
//     }, [])
//     return [packages, loading];
// };

const axiosPublic = useAxiosPublic();

    const {data: menu = [], isPending: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await axiosPublic.get('/packages');
            return res.data;
        }
    });
    return [menu, loading, refetch];
}

export default usePackage;