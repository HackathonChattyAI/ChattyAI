import React, { FC, useEffect, useState } from "react"
import style from "./ZoomButton.module.scss"

const ZoomButton: FC = () => {
  const [largeSize, setLargeSize] = useState(false)

  useEffect(() => {
    document.body.setAttribute("data-zoom", largeSize ? "large" : "medium")
  }, [largeSize])

  return <button className={style.btn_zoom} onClick={() => setLargeSize(!largeSize)}></button>
}

export default ZoomButton
