'use client'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { bebas } from '@/app/fonts';

export default function FAQ() {

    const [faq, setFaq] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        AOS.init(); // Initialize AOS for this specific component
        AOS.refresh(); // Refresh AOS to detect newly added elements
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/faq.json`);
                const data = await response.json();
                console.log(data);
                setFaq(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching faq:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className={`${bebas.className} flex justify-center text-xl md:text-3xl lg:text-6xl text-base-100 font-bold`}>
                <span
                    data-aos='fade-right'>F</span>
                <span
                    data-aos='zoom-in-down'>A</span>
                <span
                    data-aos='fade-left'>Q</span>
            </div>

            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2>What is SammTech?</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                        SammTech is a prominent software product and services company in
                        Bangladesh, providing a wide range of IT solutions since 2008.
                    </p>
                </AccordionDetails>
            </Accordion>

            {
                faq.length > 0
                &&
                faq.map((item, idx) => (
                    <Accordion key={idx}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            {item.question}
                        </AccordionSummary>
                        <AccordionDetails>
                            {item.answer}
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </div>
    );
}
