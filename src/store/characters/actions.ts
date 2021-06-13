/* eslint-disable max-len */
/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
import axios from 'axios';
import { Dispatch } from 'redux'
import {
  IPeopleResponseData,
  IResponseCharacter,
  ISpecieResponseData,
  CharactersAction,
  CharactersActionTypes as types,
} from './types'
import { DOMAIN } from '../../utils/contants'
import { ICharacter, IFilm, IStarship } from '../../globalTypes/globalTypes'
import { getCharactersFromLS } from '../../utils/helpers'

const getPeoplesPageData = async (url: string): Promise<IPeopleResponseData> => {
  return axios.get<IPeopleResponseData>(url)
    .then((response) => response.data)
    .catch((err) => err.response)
}

const getCharacterSpecies = async (specieURL: string): Promise<string> => {
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
      .catch((err) => console.log(err.response))
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
      .catch((err) => console.log(err.response))
  }
  return starships
}

const getCharacters = async (characters: IResponseCharacter[]): Promise<ICharacter[]> => {
  const result: ICharacter[] = []

  for (let i = 0; i < characters.length; i++) {
    const current = characters[i]

    if (!current.species.length) continue
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

  const characters: ICharacter[] = []

  let nextPageUrl: string | null = `${DOMAIN}/people/?page=1`

  while (nextPageUrl !== null) {
    try {
      const pageData: IPeopleResponseData = await getPeoplesPageData(nextPageUrl)
      nextPageUrl = pageData.next

      const pageCharacters = await getCharacters(pageData.results)
      characters.push(...pageCharacters)
    } catch (e) {
      console.log(e)
      nextPageUrl = null
    }
  }
  console.log(characters)

  dispatch({ type: types.GET_CHARACTERS_SUCCESS, payload: characters })
}
