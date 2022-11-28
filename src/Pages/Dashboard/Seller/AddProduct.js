import React from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';


const AddProduct = () => {
    const categories = useLoaderData();
    const { category } = categories;

    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const seller = form.seller.value;
        const category = form.category.value;
        const product = form.item.value;
        const years = form.year.value;
        const condition = form.condition.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const price = form.price.value;
        const description = form.description.value;

        const newProduct = {
            category,
            product,
            seller,
            years,
            condition,
            phone,
            location,
            resalePrice: price,
            description

        }

        fetch('http://localhost:5000/cars', {
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
                } else {
                    toast.error(data.message)
                }
            })
    }

    return (
        <div>
            <h2 className='text-center mt-5'>Add a Product</h2>
            <div className='w-25 mx-auto my-5'>
                <form onSubmit={handleAddProduct}>
                    <Form.Control type="text"
                        name="seller"
                        placeholder='Seller Name'
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
                        name="price"
                        placeholder="Price"
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