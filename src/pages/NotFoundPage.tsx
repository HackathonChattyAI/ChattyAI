import React, { FC } from "react"
import LayoutWithHeader from "../layouts/LayoutWithHeader/LayoutWithHeader"
import NotFound from "../components/NotFound/NotFound"
import { backGroundStyle } from "../layouts/LayoutWithHeader/LayoutWithHeader"

const NotFoundPage: FC = () => {
  return (
    <LayoutWithHeader bg_img={backGroundStyle.notFound}>
      <NotFound />
    </LayoutWithHeader>
  )
}

export default NotFoundPage
