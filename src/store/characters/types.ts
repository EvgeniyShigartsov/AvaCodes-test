/* eslint-disable camelcase */
import { ICharacter } from '../../globalTypes/globalTypes';

export interface ICharactersState {
  characters: ICharacter[],
  isLoading: boolean,
  error: string
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

export type CharactersAction =
  IGetCharactersAction
  | IGetCharactersSuccessAction
  | IGetCharactersErrorAction
