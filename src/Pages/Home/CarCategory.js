import React from 'react';

const CarCategory = () => {
    return (
        <div className='bg-dark text-light text-center p-5'>
            <p className='fs-1 p-5'>Find From The Best Cars</p>
            <div className='d-flex justify-content-center mb-5'>
                <div className='w-25 border border-2 border-warning m-2 p-5 text-center text-warning'>

                    <h5>CONVERTIBLE</h5>
                </div>
                <div className='w-25 border border-2 border-warning m-2 p-5 text-center text-warning'>

                    <h5>SEDAN</h5>
                </div>
                <div className='w-25 border border-2 border-warning m-2 p-5 text-center text-warning'>

                    <h5>COUPE</h5>
                </div>
            </div>
        </div>
    );
};

export default CarCategory;