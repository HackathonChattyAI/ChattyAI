import React, { FC, ReactNode } from "react"
import style from "./layoutWithHeader.module.scss"

type Props = {
  title: string
  avatar?: boolean
  children: ReactNode | undefined
}

const LayoutWithHeader: FC<Props> = props => {
  const { title, children, avatar } = props

  return (
    <main className={style.main}>
      <header className={style.header}>
        <h1 className={style.title}>{title}</h1>
        {avatar === true ? <button className={style.button} /> : <></>}
      </header>
      {children}
    </main>
  )
}

export default LayoutWithHeader
