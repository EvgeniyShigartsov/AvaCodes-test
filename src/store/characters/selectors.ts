import { RootState } from '../index'
import { ICharacter } from '../../globalTypes/globalTypes'
import { MODULE_NAME } from './reducer'

export const filteredCharactersSelector = (state: RootState): ICharacter[] => state[MODULE_NAME].filteredCharacters
export const isLoadingSelector = (state: RootState): boolean => state[MODULE_NAME].isLoading
