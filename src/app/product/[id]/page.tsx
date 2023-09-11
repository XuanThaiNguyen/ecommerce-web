'use client'

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './page.module.css'
import {Add, Remove} from '@material-ui/icons'

const Product = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" className={styles.img} />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Denim Jumpsuit</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <span className={styles.price}>$ 20</span>
          <div className={styles.filterContainer}>
            <div className={styles.filter}>
              <span className={styles.filterTitle}>Color</span>
              <div className={styles.filterColor} color="black" />
              <div className={styles.filterColor} color="darkblue" />
              <div className={styles.filterColor} color="gray" />
            </div>
            <div className={styles.filter}>
              <span className={styles.filterTitle}>Size</span>
              <select className={styles.filterSelect}>
                <option className={styles.filterOption}>XS</option>
                <option className={styles.filterOption}>S</option>
                <option className={styles.filterOption}>M</option>
                <option className={styles.filterOption}>L</option>
                <option className={styles.filterOption}>XL</option>
              </select>
            </div>
          </div>
          <div className={styles.addContainer}>
            <div className={styles.amountContainer}>
              <Remove />
              <span className={styles.amount}>1</span>
              <Add />
            </div>
            <button className={styles.btn}>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product