'use client'

import React from 'react'
import styles from './categories.module.css'
import {categories} from '@/data'
import CategoryItem from '../CategoryItem/CategoryItem'

const Categories = () => {
  return (
    <div className={styles.container}>
      {categories.map(item => <CategoryItem item={item} key={item.id} />)}
    </div>
  )
}

export default Categories