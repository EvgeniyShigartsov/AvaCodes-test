import { RootState } from '../index'
import { MODULE_NAME } from './reducer'
import { ICharacter } from '../../globalTypes/globalTypes'

export const lastDraggedItemSelector = (state: RootState): ICharacter | null => state[MODULE_NAME].lastDraggedItem
export const favoritesListSelector = (state: RootState): ICharacter[] => state[MODULE_NAME].favoritesCharacters
