/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './categoryItem.module.css'
import {CategoriesProp} from '@/data'

interface CategoryItemProps {
  item: CategoriesProp
}

const CategoryItem = ({item}: CategoryItemProps) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={item.img} alt={item.img} />
      <div className={styles.info}>
        <h1 className={styles.title}>{item.title}</h1>
        <button className={styles.btn}>SHOP NOW</button>
      </div>
    </div>
  )
}

export default CategoryItem