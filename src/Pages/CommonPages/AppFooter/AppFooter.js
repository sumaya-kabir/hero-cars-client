import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../../assets/hero-cars-logo.webp';

const AppFooter = () => {
    return (
        <footer class="w-100 bg-dark text-light row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 border-top">

            <div class="col mb-3 text-center">
                <Link to="/" class="d-flex align-items-center justify-content-end mt-5 fs-2 link-light text-decoration-none">
                    {/* <img class='w-50' src={logo} alt="" /> */}

                    <span className='fw-bold'>HERO</span>
                    <span className='text-warning fw-bold'>CARS</span>
                    
                </Link>
                <p class='ms-4'>Copyright©2022</p>
            </div>
            <div class="col mb-3">

            </div>
            <div class="col mb-3">
                <h5>Pages</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-muted">Cars</Link></li>
                    <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-muted">Blog</Link></li>
                </ul>
            </div>

            <div class="col mb-3">
                <h5>Categories</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-muted">CONVERTIBLE</Link></li>
                    <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-muted">SEDAN</Link></li>
                    <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-muted">COUPE</Link></li>
                    
                </ul>
            </div>

            <div class="col mb-3">
                <h5>Contact Us</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2">Address: Edmonton, Alberta, Canada</li>
                    <li class="nav-item mb-2">Email: hero@cars.com</li>
                    <li class="nav-item mb-2">Phone: +123456756</li>

                </ul>
            </div>
        </footer>

    );
};

export default AppFooter;