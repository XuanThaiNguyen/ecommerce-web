/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './product.module.css'
import {popularProductsProps} from '@/data'
import {FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from '@material-ui/icons'

interface ProductProps {
  item: popularProductsProps
}

const Product = ({item}: ProductProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.circle} />
      <img src={item.img} alt={item.img} className={styles.img} />
      <div className={styles.info}>
        <div className={styles.icon}>
          <ShoppingCartOutlined />
        </div>
        <div className={styles.icon}>
          <SearchOutlined />
        </div>
        <div className={styles.icon}>
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  )
}

export default Product