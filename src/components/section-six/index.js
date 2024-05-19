import React from 'react';
import { motion } from 'framer-motion';
import './style.css';
import chain from '../../assets/chain.png';

const SectionSix = () => {
  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
  };

  return (
    <div className='section--container'>
      <motion.img
        src={chain}
        alt='icon'
        className='image'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={iconVariants}
      />
      <motion.p
        className='start'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={textVariants}
      >
        Get Started
      </motion.p>
      <motion.p
        className='desc'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={textVariants}
      >
        Turn information into advantage! Start using <br /> Ramos today. Sign up for a free trial.
      </motion.p>
      <div className='btns'>
        <motion.div
          className='demo--btn'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={textVariants}
        >
          Request a demo
        </motion.div>
        <motion.div
          className='free--btn'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={textVariants}
        >
          Start for free
        </motion.div>
      </div>
    </div>
  );
}

export default SectionSix;
