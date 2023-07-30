import React, { FC } from "react"
import styles from "./LinkPopupAvatar.module.scss"
import { Link as ReactLink, LinkProps } from "react-router-dom"

type Props = LinkProps

const LinkPopupAvatar: FC<Props> = ({ children, ...props }) => {
  return (
    <ReactLink className={styles.link} {...props}>
      {children}
    </ReactLink>
  )
}

export default LinkPopupAvatar
