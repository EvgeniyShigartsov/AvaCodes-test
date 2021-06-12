import { charactersLSKey } from './contants'
import { ICharacter } from '../globalTypes/globalTypes'

export const getCharactersFromLS = (): ICharacter[] => {
  const characters = localStorage.getItem(charactersLSKey)
  if (!characters) return []
  return JSON.parse(characters)
}

export const checkIsBirthValid = (birthString: string): boolean => {
  const isBirthDateBBY = birthString.toUpperCase().endsWith('BBY')
  const isBirthDateABY = birthString.toUpperCase().endsWith('ABY')

  let isBirthValid = false

  if (isBirthDateBBY) isBirthValid = parseFloat(birthString) > 30
  else if (isBirthDateABY) isBirthValid = parseFloat(birthString) < 5

  return isBirthValid
}
