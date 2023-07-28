import React, { FC } from "react"
import LayoutWithHeader from "../layouts/LayoutWithHeader/LayoutWithHeader"
import NotFound from "../components/NotFound/NotFound"

const NotFoundPage: FC = () => {
  return (
    <LayoutWithHeader title={"Chatty AI"}>
      <NotFound />
    </LayoutWithHeader>
  )
}

export default NotFoundPage
