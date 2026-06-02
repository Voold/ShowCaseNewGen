export const parseDeadline = (deadline: string): Date | null => {
  const parts = deadline.split('-')
  if (parts.length !== 3) return null
  const [day, month, year] = parts
  return new Date(Number(year), Number(month) - 1, Number(day))
}

export const formatDeadline = (deadline: string): string => {
  const date = parseDeadline(deadline)
  if (!date) return deadline
  return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
}

export const getDaysUntil = (deadline: string): number | null => {
  const date = parseDeadline(deadline)
  if (!date) return null
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const diff = date.getTime() - today.getTime()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}