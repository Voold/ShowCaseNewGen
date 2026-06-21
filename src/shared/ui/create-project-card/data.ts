export interface ProjectCardData {
  type: 'Case' | 'Real' | 'Study',
  courses: string,
  description: string,
  prd: string,
  customers: string[]
}

export const ProjectCardData : ProjectCardData[] = [
  {
    type: 'Study',
    courses: '1 – 2',
    description: 'Первые шаги в проектную работу',
    prd: 'Упрощенное',
    customers: [
      "ТПУ"
    ]
  },
  {
    type: 'Case',
    courses: '1 – 4',
    description: 'Проект для портфолио и прокачки',
    prd: 'Стандартное',
    customers: [
      "ТПУ",
      "Партнер"
    ]
  },
  {
    type: 'Real',
    courses: '3 – 4',
    description: 'Проект с задачами из индустрии',
    prd: 'Бизнесовое',
    customers: [
      "ТПУ",
      "Партнер",
      "Клиент"
    ]
  },
]