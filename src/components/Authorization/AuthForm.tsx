import React, { FC } from "react"
import { Link } from "react-router-dom"
import styled from "./AuthForm.module.scss"
import Input from "../../ui/input/index"
import ReactLink from "../../ui/link/index"
import { Routes } from "../../constants/routes"

const AuthForm: FC = () => {
  return (
    <form className={styled.form}>
      <h2 className={styled.title}>Войти</h2>
      <p className={styled.paragraf}>
        Новый пользователь? <Link to="/Registration">Создать учетную запись</Link>
      </p>
      <Input placeholder="email@inbox.ru" />
      <Input />
      <ReactLink to={Routes.HOME}>Продолжить</ReactLink>
    </form>
  )
}

export default AuthForm
