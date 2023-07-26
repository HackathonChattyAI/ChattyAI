import React, { FC } from "react"
import LayoutWithHeader from "../layouts/LayoutWithHeader/LayoutWithHeader"
import InteractionPanel from "../components/InteractionPanel/InteractionPanel"

const Main: FC = () => {
  return (
    <LayoutWithHeader title="Chatty AI">
      <InteractionPanel />
    </LayoutWithHeader>
  )
}

export default Main
