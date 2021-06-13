/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
import axios from 'axios';
import { Dispatch } from 'redux'
import { type } from 'os';
import {
  IPeopleResponseData,
  IResponseCharacter,
  ISpecieResponseData,
  CharactersAction,
  CharactersActionTypes as types,
} from './types'
import {
  ICharacter,
  IFilm,
  IStarship,
  IFilterParams,
  IFilterOptions,
} from '../../globalTypes/globalTypes'
import { DOMAIN, charactersLSKey } from '../../utils/contants'
import { getCharactersFromLS } from '../../utils/helpers'
import { RootState } from '../index'

const getPeoplesPageData = async (url: string): Promise<IPeopleResponseData> => {
  return axios.get<IPeopleResponseData>(url)
    .then((response) => response.data)
    .catch((err) => err.response)
}
const getCharacterSpecies = async (specieURL: string): Promise<string> => {
  if (!specieURL) return 'Human'

  return axios.get<ISpecieResponseData>(specieURL)
    .then((response) => response.data.name)
    .catch(() => '')
}
const getCharactersMovies = async (movieURLs: string[]): Promise<IFilm[]> => {
  const movies: IFilm[] = []

  for (let i = 0; i < movieURLs.length; i++) {
    const currentURL = movieURLs[i]

    await axios.get<IFilm>(currentURL)
      .then((response) => movies.push(
        {
          title: response.data.title,
          episode_id: response.data.episode_id,
        },
      ))
      .catch(() => [])
  }
  return movies
}
const getCharactersStarships = async (starshipURLs: string[]): Promise<IStarship[]> => {
  const starships: IStarship[] = []
  if (starshipURLs.length === 0) return starships

  for (let i = 0; i < starshipURLs.length; i++) {
    const currentURL = starshipURLs[i]

    await axios.get<IStarship>(currentURL)
      .then((response) => starships.push(
        {
          name: response.data.name,
          url: response.data.url,
        },
      ))
      .catch(() => [])
  }
  return starships
}

const getCharacters = async (characters: IResponseCharacter[]): Promise<ICharacter[]> => {
  const result: ICharacter[] = []

  for (let i = 0; i < characters.length; i++) {
    const current = characters[i]
    const [specieURL] = current.species

    const character = {} as ICharacter
    const specie = await getCharacterSpecies(specieURL)
    const movies = await getCharactersMovies(current.films)
    const starships = await getCharactersStarships(current.starships)

    character.name = current.name
    character.url = current.url
    character.birthYear = current.birth_year
    character.species = specie
    character.films = movies
    character.starships = starships

    result.push(character)
  }
  return result
}

export const setFullCharactersData = () => async (dispatch: Dispatch<CharactersAction>):Promise<void> => {
  const charactersLS = getCharactersFromLS()
  if (charactersLS.length) {
    dispatch({ type: types.GET_CHARACTERS_SUCCESS, payload: charactersLS })
    return
  }
  dispatch({ type: types.GET_CHARACTERS_START })

  const characters: ICharacter[] = []

  let nextPageUrl: string | null = `${DOMAIN}/people`

  // Поскольку SWAPI на /people отдает только 10 персонажей, и не поддерживает запросы типа /people?perPage=100 ,
  // Пришлось выдумывать вот такие костыли.

  while (nextPageUrl !== null) {
    try {
      const pageData: IPeopleResponseData = await getPeoplesPageData(nextPageUrl)
      nextPageUrl = pageData.next

      const pageCharacters = await getCharacters(pageData.results)
      characters.push(...pageCharacters)
    } catch (e) {
      nextPageUrl = null
      dispatch(
        {
          type: types.GET_CHARACTERS_ERROR,
          payload: 'Loading data has been failed. Probably SWAPI server has been shut down.',
        },
      )
      return
    }
  }

  dispatch({ type: types.GET_CHARACTERS_SUCCESS, payload: characters })
  localStorage.setItem(charactersLSKey, JSON.stringify(characters))
}

export const setFilterOptions = (characters: ICharacter[]) => (dispatch: Dispatch<CharactersAction>): void => {
  const options = characters.reduce<IFilterOptions>((acc, current) => {
    acc.movies.push(...current.films.map((f) => f.title))
    acc.species.push(current.species)
    return acc
  }, {
    movies: [],
    species: [],
  })
  const uniqeMovies = Array.from(new Set(options.movies))
  const uniqeSpecies = Array.from(new Set(options.species))

  dispatch(
    {
      type: types.SET_FILTER_OPTIONS,
      payload: {
        allMovies: uniqeMovies,
        allSpecies: uniqeSpecies,
      },
    },
  )
}
export const filterCharacters = (params: IFilterParams) => (
  dispatch: Dispatch<CharactersAction>,
  getState: () => RootState,
): void => {
  const { characters: { characters } } = getState()
  const isAllMoviesSelected = params.movie === null
  const isAllSpeciesSelected = params.species === null;

  if (isAllMoviesSelected && isAllSpeciesSelected) {
    dispatch({ type: types.SET_FILTERED_CHARACTERS, payload: characters })
    return
  }
  const filtered = characters.filter((character) => {
    return character.films.some((f) => f.title === params.movie)
  })

  dispatch({ type: types.SET_FILTERED_CHARACTERS, payload: filtered })
}
