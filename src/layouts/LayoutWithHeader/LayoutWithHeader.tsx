import React, { FC, ReactNode, useState, useCallback } from "react"
import style from "./layoutWithHeader.module.scss"
import PopupAvatar from "../../components/PopupAvatar/PopupAvatar"

export enum backGroundStyle {
  auth = "auth",
  notFound = "error404",
}

type Props = {
  bg_img?: string
  avatar?: boolean
  children: ReactNode | undefined
}

const LayoutWithHeader: FC<Props> = props => {
  const { children, avatar, bg_img } = props
  const [modal, setModal] = useState(false)

  const handleClose = useCallback(() => {
    setModal(false)
  }, [setModal])

  const handleClick = () => {
    setModal(true)
  }

  let backGround_img
  switch (bg_img) {
    case "auth":
      backGround_img = `${style.main_auth_img}`
      break
    case "error404":
      backGround_img = `${style.main_404_img}`
      break
    default:
      backGround_img = `${style.main}`
      break
  }

  return (
    <main className={backGround_img}>
      <header className={style.header}>
        <div className={style.logo}></div>
        {avatar === true ? <button onClick={handleClick} className={style.button} /> : <></>}
      </header>
      <PopupAvatar visible={modal} outSideClickEnable handleClose={handleClose} />
      {children}
    </main>
  )
}

export default LayoutWithHeader
