import React, { FC, ReactNode } from "react"
import style from "./layoutWithHeader.module.scss"

type Props = {
  title: string
  children: ReactNode | undefined
}

const LayoutWithHeader: FC<Props> = props => {
  const { title, children } = props

  return (
    <main className={style.main}>
      <header className={style.header}>
        <h1 className={style.title}>{title}</h1>
        <button className={style.button} />
      </header>
      {children}
    </main>
  )
}

export default LayoutWithHeader
