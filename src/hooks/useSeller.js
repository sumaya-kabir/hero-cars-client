import { useEffect, useState } from 'react';

const useSeller = () => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);

    useEffect(() => {
            fetch(`https://hero-cars-server.vercel.app/sellers`)
            .then(res => res.json())
            .then( data => {
                setIsSeller(data.isAdmin);
                setIsSellerLoading(false);
                
            })
        
    }, [])
    return [isSeller, isSellerLoading];
};

export default useSeller;