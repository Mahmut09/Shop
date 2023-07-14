import React from 'react'
import Styles from './About.module.css'

const About = () => {
  return (
    <div className={Styles.about}>
        <iframe src="https://www.youtube.com/embed/9iHPqfLk_sA" title="Мы не Компания мы наебщики"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    
  )
}

export default About