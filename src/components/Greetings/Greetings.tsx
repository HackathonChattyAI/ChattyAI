import React, { FC } from "react"
import style from "./Greetings.module.scss"

const Greetings: FC = () => {
  return (
    <div className={style.content}>
      <h2 className={style.title}> Давай начнем наш первый поиск</h2>
      <div className={style.container}>
        <div className={style.subject}>
          <h3 className={style.subtitle}>Примеры</h3>
          <ul className={style.list}>
            <li className={style.text}>Какие забытые технологии стоит вернуть к жизни?</li>
            <li className={style.text}>Экзопланеты: влияние на нас?</li>
            <li className={style.text}>Медицинские прорывы: что нового?</li>
          </ul>
        </div>
        <div className={style.subject}>
          <h3 className={style.subtitle}>Возможности</h3>
          <ul className={style.list}>
            <li className={style.text}>Удобство и многофункциональность</li>
            <li className={style.text}>Обеспечивает быстрый доступ к информации</li>
            <li className={style.text}>Повышает производительность</li>
          </ul>
        </div>
        <div className={style.subject}>
          <h3 className={style.subtitle}>Ограничения</h3>
          <ul className={style.list}>
            <li className={style.text}>Может генерировать неверную информацию</li>
            <li className={style.text}>Ограниченные языковые навыки</li>
            <li className={style.text}>Невозможность выполнить все запросы</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Greetings
