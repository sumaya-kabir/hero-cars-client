
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import advertiseBG from '../../assets/advertiseBG.jpg'
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {
    const { data: advertises = [] } = useQuery({
        queryKey: ['advertises'],
        queryFn: async () => {
            const res = await fetch(`https://hero-cars-server.vercel.app/advertise`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='text-center text-light p-5' style=
            {{
                backgroundImage: `url(${advertiseBG})`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center', backgroundSize: 'cover',
            }}>
            <h2>Advertised Cars</h2>
            <Container>
            <Row>
            {
                advertises.map(advertise =>
                    <Col className='p-2'>
                        <AdvertiseCard 
                    key={advertise._id}
                    advertise={advertise}
                    >
                        
                    </AdvertiseCard>
                    </Col>
                )
            }
            </Row>
            </Container>

        </div>
    );
};

export default Advertise;