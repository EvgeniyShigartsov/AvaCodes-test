import { ICharacter, IFilterParams } from '../../globalTypes/globalTypes';

export interface ICharactersState {
  characters: ICharacter[],
  filteredCharacters: ICharacter[],
  allMovies: string[],
  allSpecies: string[],
  birthYearsRangeStatic: {
    BBYmin: number,
    ABYmax: number
  }
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
  SET_FILTERED_CHARACTERS = 'SET_FILTERED_CHARACTERS',
  SET_FILTER_OPTIONS = 'SET_FILTER_OPTIONS',
  UPDATE_FILTER_PARAMS = 'UPDATE_FILTER_PARAMS',
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
  type: CharactersActionTypes.SET_FILTERED_CHARACTERS,
  payload: ICharacter[]
}
interface ISetFilterOptionsAction {
  type: CharactersActionTypes.SET_FILTER_OPTIONS,
  payload:{
    allMovies: string[],
    allSpecies: string[],
    birthYearsRangeStatic: {
      BBYmin: number,
      ABYmax: number,
    }
  }
}
interface IUpdateFilterParamsAction {
  type: CharactersActionTypes.UPDATE_FILTER_PARAMS,
  payload: IFilterParams
}

export type CharactersAction =
  IGetCharactersAction
  | IGetCharactersSuccessAction
  | IGetCharactersErrorAction
  | IFilterCharactersAction
  | ISetFilterOptionsAction
  | IUpdateFilterParamsAction

export type FilterOptionType = 'movie' | 'species' | 'birth_year'
