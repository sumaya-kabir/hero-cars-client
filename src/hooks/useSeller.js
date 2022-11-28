import { useEffect, useState } from 'react';

const useSeller = () => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);

    useEffect(() => {
            fetch(`http://localhost:5000/sellers`)
            .then(res => res.json())
            .then( data => {
                setIsSeller(data.isAdmin);
                setIsSellerLoading(false);
                
            })
        
    }, [])
    return [isSeller, isSellerLoading];
};

export default useSeller;