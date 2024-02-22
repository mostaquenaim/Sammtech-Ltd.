import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import CardFlip from 'react-card-flip';
import Image from 'next/image';

const ServiceBox = ({ service }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  const frontCardStyles = useSpring({
    opacity: isFlipped ? 0 : 1,
    transform: `perspective(600px) rotateY(${isFlipped ? 180 : 0}deg)`,
  });

  const backCardStyles = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${isFlipped ? 0 : -180}deg)`,
  });

  return (
    <CardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        data-aos="zoom-in-down"
        className=""
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <animated.div style={frontCardStyles} className={`flex flex-col items-center text-center justify-around w-full h-80 rounded-lg bg-base-100 cursor-pointer shadow-lg shadow-black`}>
          <Image
            src={service.icon}
            width={100}
            height={100}
            alt={`${service.name} icon`}
          />
          <h1 className="text-secondary px-10 font-bold text-xl">{service.name}</h1>
        </animated.div>
      </div>

      <div
        className="w-full h-80 rounded-lg flex flex-col items-center text-center justify-around bg-base-100 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <animated.div style={backCardStyles}>
          <p className='text-secondary px-5 font-bold opacity-80'>{service.description}</p>
        </animated.div>
      </div>
    </CardFlip>
  );
};

export default ServiceBox;
