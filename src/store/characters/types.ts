import { ICharacter } from '../../globalTypes/globalTypes';

export interface ICharactersState {
  characters: ICharacter[],
  isLoading: boolean
}
export interface IPeopleResponseData {
  count: number
  next: string | null
  perevious: string | null
  results: ICharacter[]
}
export interface IPeopleResponse {
  status: number
  data: IPeopleResponseData
}

export enum CharactersActionTypes {
  GET_CHARACTERS = 'GET_CHARACTERS'
}

interface IGetCharactersAction {
  type: CharactersActionTypes.GET_CHARACTERS,
}

export type CharactersAction = IGetCharactersAction
