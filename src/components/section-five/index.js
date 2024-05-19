import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import { IoIosGitNetwork } from 'react-icons/io';
import { AiOutlinePicture } from 'react-icons/ai';
import chart from '../../assets/chart.png';
import avaone from '../../assets/avaone.png';
import avatwo from '../../assets/avatwo.png';
import Rounded from '../rounded';
import './style.sectionFive.css';

const SectionFive = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)


  return (
    <div className='wrapper'>
      <motion.p
        className='control--text'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        ref={ref}
      >
        We give you full <br />
        <span style={{ color: '#cccccc' }}>control</span> over your data
      </motion.p>
      <div className='section-container'>
        <div className='bg'>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='box'>
              <p className='conversion'>Conversion rate</p>
              <div style={{ paddingLeft: '2rem' }}>
                <span className='num--per'>2.3%</span>
                <FaPlay color="black" size='20px' className='icon' />
              </div>
              <p style={{ color: '#e6e6e6', textAlign: 'center' }}>percentage of <br />website visitors</p>
            </div>
            <div className='boxTwo'>
              <p className='sales'>Sales revenue</p>
              <div className='num--k'>$ <Rounded>13</Rounded>.2K</div>
              <div style={{ display: 'flex', padding: '1rem 0' }}>
                <hr /><hr style={{ backgroundColor: '#ffcc14' }} /><hr />
              </div>
              <div className='section--conatiner'>
                <div className='avatar-container'>
                  <div className='avatar-grp'>
                    <img src={avaone} alt='' className='avaterone' />
                    <p style={{ color: '#e6e6e6' }}>Min. price</p>
                  </div>
                  <span style={{ fontWeight: '500' }}>1,200$</span>
                </div>
                <div className='avatar-container'>
                  <div className='avatar-grp'>
                    <img src={avatwo} alt='' className='avaterone' />
                    <p style={{ color: '#e6e6e6' }}>Max. price</p>
                  </div>
                  <span style={{ fontWeight: '500' }}>2,300$</span>
                </div>
              </div>
              <div className='engage'>
                <p style={{ color: '#e6e6e6' }}>Engagement rate</p>
                <span style={{ fontWeight: '500' }}>47.84%</span>
              </div>
            </div>
          </div>
          <div className='text--container'>
            <p className='text--header'>Improved customer service</p>
            <p className='info'>Analytics helps optimize service processes by <br />providing information on how to improve interactions<br /> with customers and increase their satisfaction.</p>
          </div>
        </div>

        <div className='bg'>
          <div className='first--div'></div>
          <div className='second--div'>
            <span className='top--icon'><IoIosGitNetwork /></span>
            <p style={{ margin: '0', fontWeight: '500' }}>Finance reports</p>
          </div>
          <div className='bg--bg'>
            <div className='card--insight'>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}>
                <span className='top--icon'><AiOutlinePicture size='20px' /></span>
                Insights
              </div>
              <div className='total--container'>
                <p style={{ color: '#e6e6e6', margin: 0, padding: '0.5rem 0' }}>Total profit</p>
                <p className='num--k'>$ 264.2K</p>
                <div className='data'>Data visualization</div>
              </div>
            </div>
            <img src={chart} alt='chart image' className='chart--image' />
          </div>

          <div className='text--contain'>
            <p className='text--header'>Monitoring key indicators</p>
            <p className='info'>Analytics platforms allow businesses to track <br />KPIs. on important tool for measuring success<br />and acheiving goals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
