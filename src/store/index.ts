import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { MODULE_NAME as charactersModule, reducer as charactersReducer } from './characters/reducer'
import { MODULE_NAME as favoritesModule, reducer as favoritesReducer } from './favorites/reducer'

const rootReducer = combineReducers({
  [charactersModule]: charactersReducer,
  [favoritesModule]: favoritesReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>
