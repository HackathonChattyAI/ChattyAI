import React, { FC } from "react"
import styled from "./Link.module.scss"
import { Link as ReactLink, LinkProps } from "react-router-dom"

type Props = LinkProps

const Link: FC<Props> = ({ children, ...props }) => {
  return (
    <ReactLink className={styled.link} {...props}>
      {children}
    </ReactLink>
  )
}

export default Link
