import { charactersLSKey } from './contants'
import { ICharacter } from '../globalTypes/globalTypes'

export const getCharactersFromLS = (): ICharacter[] => {
  const characters = localStorage.getItem(charactersLSKey)
  if (!characters) return []
  return JSON.parse(characters)
}

export const getBirthYearsRange = (births: string[]): {BBYmin: number, ABYmax: number} => {
  if (!births.length) {
    return {
      BBYmin: 0,
      ABYmax: 0,
    }
  }

  const BBYDates: number[] = []
  const ABYDAtes: number[] = []

  births.forEach((birth) => {
    const isBirthDateBBY = birth.toUpperCase().endsWith('BBY')
    const isBirthDateABY = birth.toUpperCase().endsWith('ABY')

    const year = parseFloat(birth)
    if (isBirthDateBBY) BBYDates.push(year)
    else if (isBirthDateABY) ABYDAtes.push(year)
  })

  const temp = Math.max(...BBYDates)
  const BBYmin = temp - (temp * 2) // 5 - 5 * 2 = -5 ))
  const ABYmax = Math.max(...ABYDAtes)

  return { BBYmin, ABYmax }
}
