import React, { FC } from "react"
import { Link } from "react-router-dom"
const Authorization: FC = () => {
  return (
    <div>
      <h1>страница авторизации</h1>
      <Link to="/ChattyAI"> на главную страницу </Link>
    </div>
  )
}

export default Authorization
