import React, { useRef } from 'react'
import './style.css'
import { IoLayersOutline } from "react-icons/io5";
import { IoIosArrowRoundUp } from "react-icons/io";
import chartBar from '../../assets/chartbar.png'
import avaone from '../../assets/avaone.png'
import avatwo from '../../assets/avatwo.png'
import Rounded from '../rounded';
import { motion, useInView } from 'framer-motion';

const SectionTwo = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div className='section--wrapper'>
      <div className='wrapper'>
        <div className='section--text'>
          <motion.span
           initial={{ opacity: 0, y: 80 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{
             ease: "easeInOut",
             duration: 1,
             delay: 0.4,
           }}
            ref={ref}
            className='key--text'>Your key to strategic<br /> success through analytics</motion.span>
          <motion.span
             initial={{ opacity: 1, translateY: '80%' }}
             whileInView={{ opacity: 1, translateY: '0%' }}
             transition={{
               duration: 2,
               ease: 'easeOut',
               times: [0, 0.2, 0.5, 1]
             }}
            ref={ref}
            className='ready--text'
          >Ready for exciting instantaneous, <br /> all-accessible insights in real time?</motion.span>
        </div>
        <div className='cards'>
          <div className='setting--container'>
            <div className='card--container'>
              <div className='set-text'>Setting up reports</div>
              <div>
                <p className='fast--text'>Fast and easy access<br />to analytics</p>
                <p className='one--text'>one platform is a comprehensive<br />system of solutions that will be the<br />first step towards digitilization of<br />your business!</p>
              </div>
            </div>
            <div className='sales--card'>
              <div>
                <p className='sales--text'>Sales statistic</p>
              </div>
              <div className='icon--container'>
                <div className='icon--bg'><IoLayersOutline color='#fff' size='25px' /></div>
                <div className='to--card'>
                  <p className='one--text'>Total profit</p>
                  <span className='k--num'>$264.2K</span>
                </div>
                <div className='vis--card'>
                  <p className='vis--text'>Visitors</p>
                  <div className='hr--section'>
                    <hr className='hr--one' /><hr className='hr--two' />
                  </div>
                  <span className='k--num'><Rounded>56</Rounded>K</span>
                  <div className='arrow--con'>
                    <span className='arrow--icon'><IoIosArrowRoundUp size='15' color='#fff' /></span>
                    <span style={{ color: '#45c883' }}>+14%</span>
                  </div>
                </div>
              </div>
              <div className='stats--card'>
                <div className='visit-text'>Visit statistic</div>
                <div>
                  <img src={chartBar} alt='chart Bar' style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </div>
          <div className='widget--container'>
            <div className='cards-container'>
              <div className='widget--card'>
                <div><IoLayersOutline color='#ffd027' size='25px' /></div>
                <div className='ava--container'>
                  <div><img src={avaone} alt='' className='avaone' /></div>
                  <div><img src={avatwo} alt='' className='avatwo' /></div>
                </div>
              </div>
              <div className='widget--card'>
                <div style={{ paddingBottom: '1rem' }}>Transactions</div>
                <div className='sub--con'>
                  <span className='w--num'><Rounded>43</Rounded>K</span>
                  <div className='roundup--con'>
                    <span className='arrow--icon'><IoIosArrowRoundUp size='15' color='#fff' /></span>
                    <span style={{ color: '#45c883' }}>+14%</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className='wid--text'>Widget control</p>
              <p className='rep--text'>Reports provide a comprehensive overview<br />of important aspects of web analytics</p>
            </div>
          </div>
        </div>
        <div className='buttom--text'>
          <p>up to <span className='number'>45%</span></p>
          <p className='sub--text'>
            increase your analytics efficiency by up to 45%. Unique <br />
            algorithms provide insights from data. reduce time for analysis <br />
            and save time for making important, informaed decisons.</p>
        </div>
      </div>
    </div>
  )
}

export default SectionTwo