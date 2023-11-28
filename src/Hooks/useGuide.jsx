import { useEffect } from 'react';
import { useState } from 'react';

const useGuide = () => {
    const [guides, setGuide] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:8000/guide')
        .then(res => res.json())
        .then(data => {
            setGuide(data);
            setLoading(false);
        });
    }, [])
    return [guides, loading];
};

export default useGuide;