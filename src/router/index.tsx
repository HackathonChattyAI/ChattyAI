import React from "react"
import { Route, Routes } from "react-router-dom"
import { routes } from "./routes"

export const Router = () => {
  return (
    <Routes>
      {routes.map(route => {
        const { ...rest } = route
        return <Route key={rest.path} {...rest} />
      })}
    </Routes>
  )
}
