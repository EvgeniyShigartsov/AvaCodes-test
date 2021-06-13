import { ICharactersState, CharactersAction, CharactersActionTypes as types } from './types'

const initialState: ICharactersState = {
  characters: [],
  filteredCharacters: [],
  allMovies: [],
  allSpecies: [],
  birthYearsRangeStatic: {
    BBYmin: 0,
    ABYmax: 0,
  },
  isLoading: false,
  error: null,
  filterParams: {
    movie: null,
    species: null,
    birthYearsRange: {
      min: 0,
      max: 0,
    },
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
    case types.SET_FILTER_OPTIONS:
      return {
        ...state,
        allMovies: action.payload.allMovies,
        allSpecies: action.payload.allSpecies,
        birthYearsRangeStatic: action.payload.birthYearsRangeStatic,
      }
    case types.SET_FILTERED_CHARACTERS:
      return {
        ...state,
        filteredCharacters: action.payload,
      }
    case types.UPDATE_FILTER_PARAMS:
      return {
        ...state,
        filterParams: action.payload,
      }
    default:
      return state
  }
}
