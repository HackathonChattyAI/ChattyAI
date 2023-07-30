import React, { FC, useEffect, useState } from "react"
import style from "./Switcher.module.scss"

const Switcher: FC = () => {
  const [lightTheme, setLightTheme] = useState(false)

  useEffect(() => {
    document.body.setAttribute("data-theme", lightTheme ? "light" : "dark")
  }, [lightTheme])

  return <div className={style.switcher} onClick={() => setLightTheme(!lightTheme)}></div>
}

export default Switcher
