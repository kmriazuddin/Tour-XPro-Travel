import { useEffect, useState } from "react";

const usePackage = () => {
    const [packages, setPackage] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:8000/packages')
        .then(res => res.json())
        .then(data => {
            setPackage(data);
            setLoading(false);
        });
    }, [])
    return [packages, loading];
};

export default usePackage;