/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import styles from './footer.module.css'
import {Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter} from '@material-ui/icons';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.logo}>KURO.</h1>
        <p className={styles.desc}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className={styles.socialContainer}>
          <div className={styles.socialIcon} color="3B5999">
            <Facebook />
          </div>
          <div className={styles.socialIcon} color="E4405F">
            <Instagram />
          </div>
          <div className={styles.socialIcon} color="55ACEE">
            <Twitter />
          </div>
          <div className={styles.socialIcon} color="E60023">
            <Pinterest />
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <h3 className={styles.titleLinks}>Useful Links</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Cart</li>
          <li className={styles.listItem}>Man Fashion</li>
          <li className={styles.listItem}>Woman Fashion</li>
          <li className={styles.listItem}>Accessories</li>
          <li className={styles.listItem}>My Account</li>
          <li className={styles.listItem}>Order Tracking</li>
          <li className={styles.listItem}>Wishlist</li>
          <li className={styles.listItem}>Wishlist</li>
          <li className={styles.listItem}>Terms</li>
        </ul>
      </div>
      <div className={styles.right}>
        <div className={styles.right}>Contact</div>
        <div className={styles.contactItem}>
          <Room style={{marginRight: "10px"}} /> 622 Dixie Path , South Tobinchester 98336
        </div>
        <div className={styles.contactItem}>
          <Phone style={{marginRight: "10px"}} /> +1 234 56 78
        </div>
        <div className={styles.contactItem}>
          <MailOutline style={{marginRight: "10px"}} /> contact@kuro.dev
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment" className={styles.img} />
      </div>
    </div>
  );
}

export default Footer