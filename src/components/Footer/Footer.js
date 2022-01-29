import React from 'react'
import FooterIcon from '../Icons/FooterIcon'
import s from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={s.footer}>
      <span className={s.footerLabel}>
        2022 &copy; <b>FW7</b>. Time de desenvolvimento & Feito com muito
      </span>
      <FooterIcon />
    </div>
  )
}

export default Footer
