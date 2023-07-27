import React, { FC } from "react"
import styles from "./Message.module.scss"

const Message: FC = () => {
  return (
    <>
      <p className={styles.question}>Hey there! What's up</p>
      <p className={styles.answer}>Checking out iOS7 you know..</p>
      <p className={styles.question}>Hey there! What's up</p>
      <p className={styles.answer}>Checking out iOS7 you know..</p>
      <p className={styles.question}>Hey there! What's up</p>
      <p className={styles.answer}>Checking out iOS7 you know..</p>
      <p className={styles.question}>Hey there! What's up</p>
      <p className={styles.answer}>Checking out iOS7 you know..</p>{" "}
      <p className={styles.answer}>Checking out iOS7 you know..</p>
      <p className={styles.question}>Hey there! What's up</p>
      <p className={styles.answer}>Checking out iOS7 you know..</p>
      <p className={styles.question}>Hey there! What's up</p>
      <p className={styles.answer}>Checking out iOS7 you know..</p>
    </>
  )
}

export default Message
