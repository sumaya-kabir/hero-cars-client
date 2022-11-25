
import React from 'react';
import { Card } from 'react-bootstrap';
import advertiseBG from '../../assets/advertiseBG.jpg'

const Advertise = () => {
    return (
        <div className='text-center text-light pt-5' style=
            {{
                backgroundImage: `url(${advertiseBG})`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center', backgroundSize: 'cover',
            }}>
            <h2>Advertised Cars</h2>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <button>Coming Soon</button>
                    </Card.Body>
                </Card>
            
        </div>
    );
};

export default Advertise;