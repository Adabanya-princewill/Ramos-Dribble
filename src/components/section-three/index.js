import React, { useRef } from 'react'
import './style.css'
import icon from '../../assets/iconbeat.png';
import { useInView, motion } from 'framer-motion';

const SectionThree = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div className='wrapper'>
      <div>
        <motion.p
          initial={{ opacity: 1, translateY: '20%' }}
          whileInView={{ opacity: 1, translateY: '0%' }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            times: [0, 0.2, 0.5, 1]
          }}
          ref={ref}
          className='main--text'
        >
          Maximize <span className='eff--text'>efficiency</span> <br />with our intuitive</motion.p>
        <div className='circles'>
          <div className='cir--one'>
            <img src={icon} alt='icon' className='image--icon' />
          </div>
          <div className='cir--two'>
            <span className='per--number'>45% </span>
            <span className='per-text'>system grow<br /> faster</span>
          </div>
          <div className='analytics--text-container' ref={ref}>
            <motion.span
              className='analytics--text'
              initial={{ x: '0%' }}
              animate={{
                x: isInView ? ['0%', '-50%', '-20%'] : [],
              }}
              transition={{ duration: 6, ease: 'linear' }}
            >
              Analytics Service
            </motion.span>
          </div>
        </div>
        <div className='bottom--section'>
          <p>Explore traffic sources page behaviour, conversions and more to gain deep insight <br /> into your audience. With us, your business doesn't just adapt - it evolves</p>
          <div className='btns'>
            <div className='demos--btn'>Request a demo</div>
            <div className='freee--btn'>Start for free</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionThree
