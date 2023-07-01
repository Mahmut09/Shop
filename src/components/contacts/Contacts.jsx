import React from 'react'
import Styles from './Contacts.module.css'

const Contacts = () => {
  return (
    <ul className={Styles.contacts}>
        <li>Данила, он все это придумал: <a href="tel:+77088260400">+77088260400</a></li>
        <li>Думан, он делает бэк (когда-нибудь вы сможете оплатить товары): <a href="tel:+77759333430">+77759333430</a></li>
        <li>Махмут, Front-End developer (он вообще гений): <a href="tel:+7755878785">+7755878785</a></li>
    </ul>
  )
}

export default Contacts