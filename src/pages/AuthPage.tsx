import React, { FC } from "react"
import LayoutWithHeader from "../layouts/LayoutWithHeader/LayoutWithHeader"
import AuthForm from "../components/Authorization/AuthForm"

const AuthPage: FC = () => {
  return (
    <LayoutWithHeader title={"Chatty AI"}>
      <AuthForm />
    </LayoutWithHeader>
  )
}

export default AuthPage
