import React from 'react';
import { motion } from 'framer-motion';
import './style.css';
import ipadImage from '../../assets/ipad.png';
import iphoneImage from '../../assets/phone.png';

const wordAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
    },
  }),
};

const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transform: 'scaleX(1.3) scaleY(1.4)',
    transition: { duration: 0.5 },
  },
};

const ipadImageAnimation = {
  hidden: { opacity: 0, transform: 'scaleX(2.5) scaleY(1.5)', transformOrigin: '0 0', paddingRight: '5rem' },
  visible: {
    opacity: 1,
    transform: 'scaleX(2.5) scaleY(1.5)',
    transition: { duration: 0.5 },
  },
};

const SectionFour = () => {

  return (
    <div className='turning--wrapper'>
      <div className='wrapper--section'>
        <div className='turning--section'>
          <div>
            <motion.p
              className='turn-text'
              initial='hidden'
              whileInView='visible'
              variants={textAnimation}
            >
              Turning data into real <br /> actions and ideas.
            </motion.p>
            <div style={{ width: '80%', display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '4rem', zIndex: '1', position: 'relative' }}>
              <motion.div
                className='insight--section'
                initial='hidden'
                whileInView='visible'
                variants={textAnimation}
                custom={0.5}
              >
                <p>Instant Insights</p>
                <span className='plus--icon'>+</span>
              </motion.div>
              <motion.div
                className='insight--section'
                initial='hidden'
                whileInView='visible'
                variants={textAnimation}
                custom={1}
              >
                <p>AI technology</p>
                <span className='plus--icon'>+</span>
              </motion.div>
              <motion.div
                className='insight--section'
                initial='hidden'
                whileInView='visible'
                variants={textAnimation}
                custom={1.5}
              >
                <p>Easy integration</p>
                <span className='plus--icon'>+</span>
              </motion.div>
            </div>
          </div>
          <motion.img
            src={ipadImage}
            alt='ipad'
            className='scaled-image'
            initial='hidden'
            whileInView='visible'
            variants={ipadImageAnimation}
          />
          <motion.img
            src={iphoneImage}
            alt='iphone'
            className='pos-image'
            initial='hidden'
            whileInView='visible'
            variants={imageAnimation}
          />
        </div>
        <div className='ramos--text'>
          {['R', 'a', 'm', 'o', 's'].map((letter, i) => (
            <motion.span
              key={i}
              initial='hidden'
              whileInView='visible'
              variants={wordAnimation}
              custom={i}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
