import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://desolate-mountain-62875.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="py-3 pb-5 background">

            <div className="container" id="services" >
                <h3 className="fs-2 fw-bolder text-info py-2">Our Services</h3>
                <div className="row row-cols-1 row-cols-md-3 g-4 ">
                    {

                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;
