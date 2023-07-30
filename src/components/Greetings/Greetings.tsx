import React, { FC } from "react"
import style from "./Greetings.module.scss"
import { GreetingsExample, GreetingsPossibilities, GreetingsRestrictions } from "./Greetings.constants"

const Greetings: FC = () => {
  return (
    <div className={style.content}>
      <h2 className={style.title}> Давай начнем наш первый&nbsp;поиск</h2>
      <div className={style.container}>
        <div className={style.subject}>
          <h3 className={style.subtitle}>Примеры</h3>
          <ul className={style.list}>
            {GreetingsExample.map(({ id, text }) => (
              <li className={style.text} key={id}>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className={style.subject}>
          <h3 className={style.subtitle}>Возможности</h3>
          <ul className={style.list}>
            {GreetingsPossibilities.map(({ id, text }) => (
              <li className={style.text} key={id}>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className={style.subject}>
          <h3 className={style.subtitle}>Ограничения</h3>
          <ul className={style.list}>
            {GreetingsRestrictions.map(({ id, text }) => (
              <li className={style.text} key={id}>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Greetings
