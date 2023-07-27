import React, { FC, PropsWithChildren } from "react"
import style from "./SecondLayout.module.scss"

const SecondLayout: FC<PropsWithChildren> = props => {
  const { children } = props
  return <div className={style.secondlayout}>{children}</div>
}

export default SecondLayout
