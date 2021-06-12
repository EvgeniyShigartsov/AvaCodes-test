import { ICharactersState, CharactersAction, CharactersActionTypes as types } from './types'

const initialState: ICharactersState = {
  characters: [],
  isLoading: false,
  error: '',
}
export const MODULE_NAME = 'characters'

export const reducer = (state = initialState, action: CharactersAction): ICharactersState => {
  switch (action.type) {
    case types.GET_CHARACTERS_START:
      return {
        ...state,
        isLoading: true,
      }
    case types.GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        characters: action.payload,
      }
    case types.GET_CHARACTERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
