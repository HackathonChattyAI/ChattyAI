import React, { FC, PropsWithChildren } from "react"
import "./baseLayout.scss"

const BaseLayout: FC<PropsWithChildren> = props => {
  const { children } = props
  return <div className="baselayout">{children}</div>
}

export default BaseLayout
