'use client';
import React, { useEffect, useState } from 'react';
import Heading from '../Heading';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceBox from './ServiceBox';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/services.json`);
                const data = await response.json();
                console.log(data);
                setServices(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching services:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        AOS.init(); // Initialize AOS for this specific component
        AOS.refresh(); // Refresh AOS to detect newly added elements
    }, []);

    return (
        <>
            <div className='pt-20 pl-10'>
                <Heading title={`Our Services & Solutions`} />
                {loading ? (
                    <span className='loading loading-spinner loading-lg'></span>
                ) : services.length <= 0 ? (
                    <p
                        data-aos="fade-up"
                        className=''>
                        Services are not being loaded
                    </p>
                ) : (
                    // Inside the mapping part of your Services component
                    services.map((item, idx) => (
                        <div key={idx} className="py-10">
                            <p data-aos="fade-up"
                                className={`text-lg md:text-2xl lg:text-4xl text-base-100 opacity-90 transition-all font-semibold`}>
                                {item.category}
                            </p>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4 mx-10'>
                                {
                                    item.list.map((service, idx) => (
                                        <ServiceBox service={service} key={idx} />
                                    ))
                                }
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default Services;
