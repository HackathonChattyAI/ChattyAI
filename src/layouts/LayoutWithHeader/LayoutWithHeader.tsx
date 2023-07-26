import React, { FC, ReactNode } from "react"
import "./layoutWithHeader.scss"
import "../../assets/styles/text.scss"

type Props = {
  title?: string
  children: ReactNode | undefined
}

const LayoutWithHeader: FC<Props> = props => {
  const { title, children } = props

  return (
    <main className="main">
      <header className="header">
        <button />
        <h1 className="H1">{title ?? ""}</h1>
      </header>
      {children}
    </main>
  )
}

export default LayoutWithHeader
