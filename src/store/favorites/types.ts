import { ICharacter } from '../../globalTypes/globalTypes';

export interface IFavoritesState {
  favoritesCharacters: ICharacter[],
  lastDraggedItem: ICharacter | null
}

export enum FavoritesActionTypes {
  UPDATE_FAVORITE_CHARACTERS = 'UPDATE_FAVORITE_CHARACTERS',
  SET_LAST_DRAGGED_ITEM = 'SET_LAST_DRAGGED_ITEM',
  CLEAR_LAST_DRAGGED_ITEM = 'CLEAR_LAST_DRAGGED_ITEM',
}

interface ISetLastDraggedItem {
  type: FavoritesActionTypes.SET_LAST_DRAGGED_ITEM
  payload: ICharacter
}
interface IClearLastDraggedItem {
  type: FavoritesActionTypes.CLEAR_LAST_DRAGGED_ITEM,
}
interface IUpdateFavoritesAction {
  type: FavoritesActionTypes.UPDATE_FAVORITE_CHARACTERS,
  payload: ICharacter[]
}

export type FavoritesAction =
  ISetLastDraggedItem
  | IClearLastDraggedItem
  | IUpdateFavoritesAction
