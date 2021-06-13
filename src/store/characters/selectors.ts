import { RootState } from '../index'
import { ICharacter, IFilterParams } from '../../globalTypes/globalTypes'
import { MODULE_NAME } from './reducer'

export const allCharactersSelector = (state: RootState): ICharacter[] => state[MODULE_NAME].characters
export const filteredCharactersSelector = (state: RootState): ICharacter[] => state[MODULE_NAME].filteredCharacters
export const isLoadingSelector = (state: RootState): boolean => state[MODULE_NAME].isLoading
export const allMoviesSelector = (state: RootState): string[] => state[MODULE_NAME].allMovies
export const allSpeciesSelector = (state: RootState): string[] => state[MODULE_NAME].allSpecies
export const filterParamsSelector = (state: RootState): IFilterParams => state[MODULE_NAME].filterParams
