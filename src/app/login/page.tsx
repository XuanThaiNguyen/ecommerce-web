import React from 'react'
import styles from './page.module.css'

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>SIGN IN</h1>
        <form className={styles.form}>
          <input className={styles.input} placeholder='username' />
          <input className={styles.input} placeholder='password' />
          <button className={styles.btn}>LOGIN</button>
          <a className={styles.link}>DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a className={styles.link}>CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  )
}

export default Login