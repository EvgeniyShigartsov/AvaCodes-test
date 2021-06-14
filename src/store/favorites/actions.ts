import { Dispatch } from 'redux'
import { FavoritesAction, FavoritesActionTypes as types } from './types'
import { ICharacter } from '../../globalTypes/globalTypes'
import { favoritesLSKey } from '../../utils/contants'
import { getFavoritesFromLS } from '../../utils/helpers'

export const setFavoritesList = () => (dispatch: Dispatch<FavoritesAction>): void => {
  const items = getFavoritesFromLS()
  dispatch({ type: types.UPDATE_FAVORITE_CHARACTERS, payload: items })
}

export const addNewCharacter = (character: ICharacter) => (dispatch: Dispatch<FavoritesAction>): void => {
  const prevItems = getFavoritesFromLS()

  const isRepeated = prevItems.some((char) => char.url === character.url)
  if (isRepeated) return

  const updated = [...prevItems, character]
  localStorage.setItem(favoritesLSKey, JSON.stringify(updated))

  dispatch({ type: types.UPDATE_FAVORITE_CHARACTERS, payload: updated })
}

export const deleteCharacter = (characterURL: string) => (dispatch: Dispatch<FavoritesAction>): void => {
  const prevItems = getFavoritesFromLS()

  const updated = prevItems.filter((char) => char.url !== characterURL)
  localStorage.setItem(favoritesLSKey, JSON.stringify(updated))

  dispatch({ type: types.UPDATE_FAVORITE_CHARACTERS, payload: updated })
}

export const setLastDraggedItem = (character: ICharacter) => (dispatch: Dispatch<FavoritesAction>): void => {
  dispatch({ type: types.SET_LAST_DRAGGED_ITEM, payload: character })
}
