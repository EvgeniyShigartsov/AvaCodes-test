import { ICharactersState, CharactersAction, CharactersActionTypes as types } from './types'

const initialState: ICharactersState = {
  characters: [],
  filteredCharacters: [],
  isLoading: false,
  error: null,
  filterParams: {
    movie: '',
    species: '',
    birth_year: '',
  },
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
        filteredCharacters: action.payload,
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
