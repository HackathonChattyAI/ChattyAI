import React, { FC, PropsWithChildren } from "react"
import styles from "./PopupAvatar.module.scss"
import Modal from "../Modal/Modal"
import LinkPopupAvatar from "../../ui/linkPopupAvatar/index"
import { Routes } from "../../constants/routes"

type Props = {
  visible: boolean
  handleClose: () => void
  outSideClickEnable?: boolean
} & PropsWithChildren

const PopupAvatar: FC<Props> = props => {
  const { ...otherProps } = props

  return (
    <Modal {...otherProps}>
      <div className={styles.container}>
        <div className={styles.text_container}>
          <p className={styles.textContent}>example@gmail.com</p>
        </div>
        <LinkPopupAvatar to={Routes.NOT_FOUND}>
          <span className={`${styles.icon} ${styles.settings}`}></span>
          <p className={styles.textContent}>Настройки</p>
        </LinkPopupAvatar>
        <LinkPopupAvatar to={Routes.SIGNIN}>
          <span className={`${styles.icon} ${styles.exit}`}></span>
          <p className={styles.textContent}>Выход</p>
        </LinkPopupAvatar>
      </div>
    </Modal>
  )
}

export default PopupAvatar
