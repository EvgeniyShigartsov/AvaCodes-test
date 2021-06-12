import { ICharactersState, CharactersAction, CharactersActionTypes as types } from './types'

const initialState: ICharactersState = {
  characters: [],
  isLoading: false,
}
export const MODULE_NAME = 'characters'

export const reducer = (state = initialState, action: CharactersAction): ICharactersState => {
  switch (action.type) {
    case types.GET_CHARACTERS:
      return {
        ...state,
      }
    default:
      return state
  }
}
