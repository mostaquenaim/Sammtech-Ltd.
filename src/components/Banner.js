'use client'
import Image from "next/image";
import cover from '/public/SammTech-Cover-Photo-with-Services.png'

const Banner = () => {
    return (
        <>
            {/* <div
                className="bg-cover bg-center h-96 w-96" style={{ backgroundImage: `url(${cover})` }}>
            </div> */}
            <div className="">
                <Image
                    src={cover}
                    width={1600}
                    height={500}
                    alt="sammtech banner"
                    className="xl:w-[2700px] lg:w-[1600px] md:w-[1000px] w-[800px]"
                />
            </div>
        </>

    );
};

export default Banner;