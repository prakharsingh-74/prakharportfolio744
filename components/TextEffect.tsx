import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'DEVELOPER',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'DESIGNER',
        1500,
        'MACHINE LEARNING',
        1500,
        'E-SPORTS ATHLETE',
        1500
      ]}
      
      speed={50}
      className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect;