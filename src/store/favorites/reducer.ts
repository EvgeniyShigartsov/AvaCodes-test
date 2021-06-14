import { IFavoritesState, FavoritesAction, FavoritesActionTypes as types } from './types'

const initialState: IFavoritesState = {
  favoritesCharacters: [],
  lastDraggedItem: null,
}

export const MODULE_NAME = 'favorites'

export const reducer = (state = initialState, action: FavoritesAction): IFavoritesState => {
  switch (action.type) {
    case types.UPDATE_FAVORITE_CHARACTERS:
      return {
        ...state,
        favoritesCharacters: action.payload,
      }
    case types.SET_LAST_DRAGGED_ITEM:
      return {
        ...state,
        lastDraggedItem: action.payload,
      }
    case types.CLEAR_LAST_DRAGGED_ITEM:
      return {
        ...state,
        lastDraggedItem: null,
      }
    default:
      return state
  }
}
