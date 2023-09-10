'use client'

import React from 'react'
import styles from './navbar.module.css'
import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from '@material-ui/core';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <span className={styles.language}>Vi</span>
          <div className={styles.searchContainer}>
            <input className={styles.input} />
            <Search style={{color: "gray", fontSize: 16}} />
          </div>
        </div>
        <div className={styles.center}>
          <h1 className={styles.logo}>Kuro.</h1>
        </div>
        <div className={styles.right}>
          <div className={styles.menuItem}>Register</div>
          <div className={styles.menuItem}>Sign In</div>
          <div className={styles.menuItem}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar