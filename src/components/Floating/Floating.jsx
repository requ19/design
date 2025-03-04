import React from 'react'
import styles from './Floating.module.scss'
import star from '../../img/main/star.png'
const Floating = ({customStyle}) => {
  return (
    <div className={`${styles.text} ${customStyle}`}>
        <p>Web <img src={star} alt="" /> Adobe <img src={star} alt="" /> UX/UI <img src={star} alt="" /> Motion design <img src={star} alt="" /> 2D animation <img src={star} alt="" /> Blender <img src={star} alt="" /> Branding</p>
        <p>Web <img src={star} alt="" /> Adobe <img src={star} alt="" /> UX/UI <img src={star} alt="" /> Motion design <img src={star} alt="" /> 2D animation <img src={star} alt="" /> Blender <img src={star} alt="" /> Branding</p>
    
        <div></div>
      </div>
  )
}

export default Floating
