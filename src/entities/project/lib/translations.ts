import type { ProjectFormat } from '../model/types'

export const getProjectFormatTranslation = (format: ProjectFormat) => {
  switch (format) {
    case 'Case':
      return 'Кейсовый'
    case 'Study':
      return 'Учебный'
    case 'Real':
      return 'Реальный'
    case 'Paid':
      return 'Оплачиваемый'
  }
}
