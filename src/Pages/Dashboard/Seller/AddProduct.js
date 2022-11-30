import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';


const AddProduct = () => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);

    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const seller = form.seller.value;
        const email = form.email.value;
        const category = form.category.value;
        const product = form.item.value;
        const picture = form.photo.value;
        const years = form.year.value;
        const condition = form.condition.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const price1 = form.price1.value;
        const price2 = form.price2.value;
        const description = form.description.value;

        const newProduct = {
            category,
            product,
            picture,
            seller,
            email,
            years,
            condition,
            phone,
            location,
            orginalPrice: price1,
            resalePrice: price2,
            description,
            isVerified: false

        }

        fetch('https://hero-cars-server.vercel.app/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data);
                    toast.success('The Product Added Successfully');
                    navigate('/dashboard/myproducts')
                } else {
                    toast.error(data.message)
                }
            })
    }

    return (
        <div>
            <h2 className='text-center mt-5'>Add a Product</h2>
            <div className='w-50 mx-auto my-5'>
                <form onSubmit={handleAddProduct}>
                    <Form.Control type="text"
                        name="seller"
                        placeholder='Seller Name'
                        required />
                        <br />
                        <Form.Control type="email"
                        name="email"
                        defaultValue={user?.email}
                        required />
                        <br />
                    <Form.Control type="text"
                        name="item"
                        placeholder='Product Name'
                        required />
                    <br />
                    <Form.Select name="category"
                        required
                        aria-label="Default select example">
                        <option>Select Product Category</option>
                        <option value="Convertible">Convertible</option>
                        <option value="Sedan">Sedan</option>
                        <option value="Coupe">Coupe</option>
                    </Form.Select>
                    <br />
                    <Form.Control type="text"
                        name="photo"
                        placeholder="Product Image"
                        />
                    <br />
                    <Form.Control type="text"
                        name="price1"
                        placeholder="Orginal Price"
                        required />
                    <br />
                    <Form.Control type="text"
                        name="price2"
                        placeholder="Resale Price"
                        required />
                    <br />
                    <Form.Control type="text"
                        name="year"
                        placeholder="Year of Use"
                        required />
                    <br />
                    <Form.Control type="text"
                        name="condition"
                        placeholder='Condition'
                        required
                    />
                    <br />
                    <Form.Control type="text"
                        name="phone"
                        placeholder='Mobile Number'
                        required />
                    <br />
                    <Form.Control type="text"
                        name="location"
                        placeholder='Location'
                        required />
                    <br />
                    <Form.Control
                        as="textarea"
                        placeholder="Product Description"
                        name="description"
                        required
                        style={{ height: '100px' }}
                    />
                    <br />
                    <Button className='w-100 fw-bold' variant="warning" type="submit">
                        Add Product
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;