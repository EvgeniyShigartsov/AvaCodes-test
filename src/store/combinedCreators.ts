import * as charactersCreators from './characters/actions'
import * as favoritesCreators from './favorites/actions'

// Обьединил все action creators в один обьект, для хука useActions
// Но в большм проекте наверное использовать такой способ не стал бы, из-за риска
// получить конфликты имен.

export const combinedCreators = {
  ...charactersCreators,
  ...favoritesCreators,
}
