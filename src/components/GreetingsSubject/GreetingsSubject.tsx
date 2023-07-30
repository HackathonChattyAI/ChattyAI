import React, { FC } from "react"
import style from "./Greetings.module.scss"
import { GreetingsExample, GreetingsPossibilities, GreetingsRestrictions } from "../Greetings/Greetings.constants"

type Props = {
  title: string
}

const GreetingsSubject: FC<Props> = props => {
  const { title } = props

  return (
    <div className={style.subject}>
      <h3 className={style.subtitle}>{title}</h3>
      <ul className={style.list}>
        {GreetingsExample.map(({ id, text }: any) => (
          <li className={style.text} key={id}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GreetingsSubject
