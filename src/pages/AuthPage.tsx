import React, { FC } from "react"
import LayoutWithHeader from "../layouts/LayoutWithHeader/LayoutWithHeader"
import AuthForm from "../components/Authorization/AuthForm"
import { backGroundStyle } from "../layouts/LayoutWithHeader/LayoutWithHeader"

const AuthPage: FC = () => {
  return (
    <LayoutWithHeader bg_img={backGroundStyle.auth}>
      <AuthForm />
    </LayoutWithHeader>
  )
}

export default AuthPage
