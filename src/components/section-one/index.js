import './style.css';
import laptopImage from '../../assets/laptophero.png';
import { FaBolt, FaPlay } from "react-icons/fa";
import { PiShareNetwork } from "react-icons/pi";
import { MdOutlineSort } from "react-icons/md";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const SectionOne = () => {
  const { ref: imageSectionRef, inView: imageSectionInView } = useInView({ triggerOnce: false });
  const { ref: heroTextRef, inView: heroTextInView } = useInView({ triggerOnce: false });
  const { ref: shapeTextRef, inView: shapeTextInView } = useInView({ triggerOnce: false });

  const imageSectionControls = useAnimation();
  const heroTextControls = useAnimation();
  const shapeTextControls = useAnimation();

  useEffect(() => {
    if (imageSectionInView) {
      imageSectionControls.start({ opacity: 1, y: 0 });
    } else {
      imageSectionControls.start({ opacity: 0, y: 100 });
    }
  }, [imageSectionInView, imageSectionControls]);

  useEffect(() => {
    if (heroTextInView) {
      heroTextControls.start({ opacity: 1, y: 0 });
    } else {
      heroTextControls.start({ opacity: 0, y: 100 });
    }
  }, [heroTextInView, heroTextControls]);

  useEffect(() => {
    if (shapeTextInView) {
      shapeTextControls.start({ opacity: 1, y: 0 });
    } else {
      shapeTextControls.start({ opacity: 0, y: 100 });
    }
  }, [shapeTextInView, shapeTextControls]);

  return (
    <div className='wrapper'>
      <motion.div
        className='image--section'
        ref={imageSectionRef}
        initial={{ opacity: 0, y: 100 }}
        animate={imageSectionControls}
        transition={{ duration: 1 }}
      >
        <motion.div
          ref={heroTextRef}
          initial={{ y: 100, opacity: 0 }}
          animate={heroTextControls}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <p className='hero--text'>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <FaBolt className='bolt--icon' size='25px' color="#fe4a23" />
            </motion.span>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
            >
              <PiShareNetwork className='share--icon' size='25px' color="#fff" />
            </motion.span>
            Analytics <br />
            <span style={{ paddingRight: '4rem' }}>that <span style={{ color: '#cccccc' }}>helps</span> you</span>
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
        >
          <img className='image--class' src={laptopImage} alt='image' />
          <FaPlay color="#fff" size='20px' className='play--icon' />
        </motion.div>
      </motion.div>
      <motion.div
        ref={shapeTextRef}
        initial={{ y: 100, opacity: 0 }}
        animate={shapeTextControls}
        transition={{ duration: 0.5 }}
      >
        <p className='shape-text'>
          shape <span><MdOutlineSort color="black" size='25px' className='network--icon' /></span> the future
        </p>
      </motion.div>
    </div>
  );
};

export default SectionOne;
