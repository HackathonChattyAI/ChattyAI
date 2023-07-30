import React, { FC, ReactNode } from "react"
import style from "./layoutWithHeader.module.scss"

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
        {avatar === true ? <button className={style.button} /> : <></>}
      </header>
      {children}
    </main>
  )
}

export default LayoutWithHeader
