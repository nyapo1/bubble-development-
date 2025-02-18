import React from 'react';
import { useEffect } from 'react';
import { FaStar ,FaRocket} from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero1 = () => {
  const properties = ["Reliability", "Effectiveness", "Speed"];
  const classes = 'text-yellow-500';

  // GSAP Animation
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.5, ease: 'power3.out' },
      scrollTrigger: {
        trigger: '#start-button',
        start: 'top 80%',
        end: 'top 10%',
        toggleActions: 'play none none reset',
      },
    });
  
    tl.fromTo('#rating', { y: 15, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo('#title', { y: 15, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.5')
      .fromTo('#paragraph', { y: 15, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.5')
      .fromTo('#start-button', { y: 15, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.5');
  
    return () => {
      // Cleanup the ScrollTrigger instance
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);





  return (
    <div className='mt-30 md:mt-45 flex flex-col hero-section'>
      <section className='flex space-x-4 justify-center ' id='rating'>
      {properties.map((property, index) => (
        <div key={index} className='flex flex-col items-center'>
          <div className='p-2 flex'>
            <FaStar className={classes} />
            <FaStar className={classes} />
            <FaStar className={classes} />
            <FaStar className={classes} />
            <FaStar className={classes} />
          </div>
          <p className='text-center font-bold'>{property}</p>
        </div>
      ))}
      </section>

      <h1 className='text-center max-sm:font-semibold font-bold px-5 text-purple-950 mb-8 mt-10 text-4xl max-sm:text-2xl ' id='title'>
        Unlimited Bubble development for results-driven 
        <span className=' text-purple-500'> startups & businesses</span>
      </h1>

     <p className='text-center px-20 font-medium ' id='paragraph'>
     In today's fast-paced digital landscape, startups and businesses require innovative solutions that drive results. <span className='max-sm:hidden'>Our unlimited Bubble development services empower organizations to rapidly prototype and launch applications tailored to their unique needs.</span>
     </p>

     <div className='text-center mt-8 ' id='start-button'>
      <button className='rounded-full bg-purple-700 text-white text-center max-sm:px-3 max-sm:py-1 px-4 py-3 cursor-pointer text-2xl hover:shadow-lg hover:-translate-y-2 transition-all duration-300'>
        Star My Project
        <FaRocket className='inline-block ml-2'/>
      </button>
     </div>

    
      
    </div>
  );
};

export default Hero1;