import { bebas } from '@/app/fonts';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Heading = ({ title }) => {

    useEffect(() => {
        AOS.init(); // Initialize AOS for this specific component
        AOS.refresh(); // Refresh AOS to detect newly added elements
    }, []);

    return (
        <>
            <div
                data-aos='zoom-in-down'
                className='flex justify-center text-center items-center'>
                <h1 className={`${bebas.className} text-base-100 text-xl md:text-3xl lg:text-6xl font-extrabold text-center group`}>
                    {title}
                    <span class="block max-w-xs group-hover:max-w-md transition-all duration-500 h-0.5 bg-sky-600"></span>
                </h1>
            </div>
        </>
    );
};

export default Heading;