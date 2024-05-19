import React from 'react';
import { motion } from 'framer-motion';
import './style.css';
import qrCode from '../../assets/qrcode.png';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const qrVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className='footer--container'>
      <div className='wrapper'>
        <motion.div
          className='section--menu'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className='footer--menu' variants={itemVariants}>
            <span>About</span>
            <span>Why Us</span>
            <span>Platform</span>
            <span>Pricing</span>
            <span>Contacts</span>
          </motion.div>
          <motion.div className='menu--email' variants={itemVariants}>
            hello@ramos.com
          </motion.div>
        </motion.div>
        <motion.div
          className='footer--social--wrapper'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className='footer--address'>
            <motion.div variants={itemVariants}>
              <p>Warrensville Heights</p>
              <p className='footer-address--desc'>
                14418 Vineyard Drive NC <br />
                44128
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p>Saint Louis</p>
              <p className='footer-address--desc'>
                1366 Penn Street <br />
                63101
              </p>
            </motion.div>
          </div>
          <motion.div className='footer--socials' variants={itemVariants}>
            <span>Linkedin</span>
            <span>Instagram</span>
            <span>Facebook</span>
          </motion.div>
        </motion.div>
        <motion.div
          className='footer--bottom--wrapper'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className='footer--trademark' variants={itemVariants}>
            Ramos &reg;
          </motion.div>
          <motion.div className='footer--sub' variants={itemVariants}>
            <div>Privacy policy</div>
            <div>License agreement</div>
            <motion.img
              src={qrCode}
              alt='QR code'
              className='qr--code'
              variants={qrVariants}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
