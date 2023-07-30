import React, { FC } from "react"
import styles from "./NotFound.module.scss"
import ReactLink from "../../ui/link/index"
import { Routes } from "../../constants/routes"

const NotFound: FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text_content}>Упс, у нас что-то сломалось</p>
      <ReactLink to={Routes.HOME}>Обновить</ReactLink>
    </div>
  )
}

export default NotFound
