// import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const usePackage = () => {

const axiosPublic = useAxiosPublic();

    const {data: packages = [], isPending: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await axiosPublic.get('/packages');
            return res.data;
        }
    });
    return [packages, loading, refetch];
}

export default usePackage;