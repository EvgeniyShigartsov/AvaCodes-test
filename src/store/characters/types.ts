import { ICharacter, IFilterParams } from '../../globalTypes/globalTypes';

export interface ICharactersState {
  characters: ICharacter[],
  filteredCharacters: ICharacter[],
  allMovies: string[],
  allSpecies: string[],
  isLoading: boolean,
  error: string | null,
  filterParams: IFilterParams
}

export interface IResponseCharacter {
  name: string,
  birth_year: string,
  url: string,
  species: string[],
  films: string[],
  starships: string[],
}

export interface IPeopleResponseData {
  count: number
  next: string | null
  perevious: string | null
  results: IResponseCharacter[]
}
export interface ISpecieResponseData {
  name: string
}

export enum CharactersActionTypes {
  GET_CHARACTERS_START = 'GET_CHARACTERS_START',
  GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS',
  GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR',
  FILTER_CHARACTERS = 'FILTER_CHARACTERS',
  SET_FILTER_OPTIONS = 'SET_FILTER_OPTIONS',
}

interface IGetCharactersAction {
  type: CharactersActionTypes.GET_CHARACTERS_START,
}
interface IGetCharactersSuccessAction {
  type: CharactersActionTypes.GET_CHARACTERS_SUCCESS,
  payload: ICharacter[]
}
interface IGetCharactersErrorAction {
  type: CharactersActionTypes.GET_CHARACTERS_ERROR,
  payload: string
}
interface IFilterCharactersAction {
  type: CharactersActionTypes.FILTER_CHARACTERS,
  payload: IFilterParams
}
interface ISetFilterOptions {
  type: CharactersActionTypes.SET_FILTER_OPTIONS,
  payload:{
    allMovies: string[],
    allSpecies: string[],
  }
}

export type CharactersAction =
  IGetCharactersAction
  | IGetCharactersSuccessAction
  | IGetCharactersErrorAction
  | IFilterCharactersAction
  | ISetFilterOptions
