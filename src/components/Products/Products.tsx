'use client'

import React from 'react'
import styles from './products.module.css'
import {popularProducts} from '@/data'
import Product from '../Product/Product'

const Products = () => {
  return (
    <div className={styles.container}>
      {popularProducts.map(item => <Product item={item} key={item.id} />)}
    </div>
  )
}

export default Products