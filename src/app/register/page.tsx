import React from 'react'
import styles from './page.module.css'

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>CREATE AN ACCOUNT</h1>
        <form className={styles.form}>
          <input className={styles.input} placeholder='name' />
          <input className={styles.input} placeholder='last name' />
          <input className={styles.input} placeholder='username' />
          <input className={styles.input} placeholder='email' />
          <input className={styles.input} placeholder='password' />
          <input className={styles.input} placeholder='confirm password' />
          <span className={styles.agreement}> By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b></span>
          <button className={styles.btn}>CREATE</button>
        </form>
      </div>
    </div>
  )
}

export default Register