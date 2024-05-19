import React from 'react';
import { motion } from 'framer-motion';
import './style.css';
import logo from '../../assets/logo.png';

const Header = () => {
    const menuItems = ['Dashboards', 'Reports', 'Documents', 'History', 'Settings'];

    return (
        <motion.div 
            className='container'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <motion.div
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ type: 'tween', stiffness: 120 }}
                viewport={{ once: true }}
            >
                <img className='logo' src={logo} alt='logo' />
            </motion.div>
            <motion.div className='header--menu'>
                {menuItems.map((item, index) => (
                    <motion.span 
                        key={index} 
                        className='item' 
                        initial={{ opacity: 0, translateY: '80%' }}
                        animate={{ opacity: 1, translateY: '0%' }}
                        transition={{ delay: 0.1 * index }}
                    >
                        {item}
                    </motion.span>
                ))}
            </motion.div>
            <motion.div 
                className='header--btn'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                viewport={{ once: true }}
            >
                Sign Up
            </motion.div>
        </motion.div>
    );
}

export default Header;
