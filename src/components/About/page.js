'use client'
import Heading from '../Heading';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init(); // Initialize AOS for this specific component
        AOS.refresh(); // Refresh AOS to detect newly added elements
    }, []);

    return (
        <>
            {/* <Heading title={`About us`} /> */}
            <section className="bg-white py-16 my-16">
                <div className="container mx-auto">
                    <div className="flex flex-col-reverse md:flex-row items-center justify-around h-full px-10 md:px-20 lg:px-40">
                        {/* Left Column - Text Content */}
                        <div
                            data-aos='fade-right'
                            className='md:px-10 lg:px-20'>
                            <h2 className="text-4xl font-bold mb-6">About SammTech</h2>
                            <p className="text-gray-600 leading-relaxed">
                                SammTech Limited has been a trailblazer in the information technology field since 2008. With a commitment to innovation and quality, we have carved our niche as a prominent software product and services company based in Bangladesh.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                Our specialization lies in providing cutting-edge application software for various industries, with a strong focus on Core Banking solutions for the financial sector. We extend our expertise to non-banking financial companies, agent banking, capital markets, broker houses, life insurance, enterprise resource planning (ERP), and comprehensive digital marketing solutions.
                            </p>
                        </div>

                        {/* Right Column - Image */}
                        <div className="relative h-72 md:h-full">
                            <Image
                                data-aos='zoom-out-down'
                                // data-aos-anchor="#example-anchor"
                                // data-aos-offset="500"
                                // data-aos-duration="500"
                                src="/sammtech.jpg"
                                alt="SammTech Office"
                                width={500}
                                height={500}
                                className='rounded-full'
                            // layout="fill"
                            // objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;