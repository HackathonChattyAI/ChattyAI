import styled from "./input.module.scss"
import React, { ForwardedRef, forwardRef, FC, InputHTMLAttributes } from "react"

type Props = {
  ref?: ForwardedRef<HTMLInputElement>
} & InputHTMLAttributes<HTMLInputElement>

const Input: FC<Props> = forwardRef((props, ref) => {
  const { ...rest } = props

  return (
    <div className={styled.wrapper}>
      <input className={styled.input} ref={ref} {...rest} />
    </div>
  )
})

export default Input
