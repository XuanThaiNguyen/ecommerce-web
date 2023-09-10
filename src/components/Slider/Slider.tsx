/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import styles from './slider.module.css'
import {ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons'

const Slider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.arrow} style={{left: 10}}>
        <ArrowLeftOutlined />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.slide}>
          <div className={styles.imgContainer}>
            <img src="/p1.jpeg" alt="" className={styles.img} />
          </div>
          <div className={styles.infoContainer}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Desc</p>
            <button className={styles.btn}>Button</button>
          </div>
        </div>
      </div>
      <div className={styles.arrow} style={{right: 10}}>
        <ArrowRightOutlined />
      </div>
    </div>
  )
}

export default Slider