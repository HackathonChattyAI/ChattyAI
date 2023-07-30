import { nanoid } from "nanoid"
import { Explanations } from "../../types/Explanations"

export const GreetingsExample = [
  {
    id: nanoid(),
    text: "Какие забытые технологии стоит вернуть к жизни?",
  },
  {
    id: nanoid(),
    text: "Экзопланеты: влияние на нас?",
  },
  {
    id: nanoid(),
    text: "Медицинские прорывы: что нового?",
  },
]

export const GreetingsPossibilities = [
  {
    id: nanoid(),
    text: "Удобство и многофункциональность",
  },
  {
    id: nanoid(),
    text: "Обеспечивает быстрый доступ к информации",
  },
  {
    id: nanoid(),
    text: "Повышает производительность",
  },
]

export const GreetingsRestrictions = [
  {
    id: nanoid(),
    text: "Может генерировать неверную информацию",
  },
  {
    id: nanoid(),
    text: "Ограниченные языковые навыки",
  },
  {
    id: nanoid(),
    text: "Невозможность выполнить все запросы",
  },
]

// при типизации должно быть что-то типа такого, как мне кажется:
// но получется, что не совсем так - так как все тексты это еще и массивы данных

// export const GreetingsExample = ({id, title} : Explanations) => [
//     {
//         id: nanoid(),
//         text: "Удобство и многофункциональность"
//     },
// ]
