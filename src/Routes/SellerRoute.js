import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useSeller from '../hooks/useSeller';

const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller();
    const location = useLocation();

    if(loading || isSellerLoading) {
        return <p>Loading...................</p>
    }

    if( user || isSeller) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default SellerRoute;