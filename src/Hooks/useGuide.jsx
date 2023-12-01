import { useEffect } from 'react';
import { useState } from 'react';

const useGuide = () => {
    const [guides, setGuide] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://tour-xpro-travel.onrender.com/guide')
        .then(res => res.json())
        .then(data => {
            setGuide(data);
            setLoading(false);
        });
    }, [])
    return [guides, loading];
};

export default useGuide;