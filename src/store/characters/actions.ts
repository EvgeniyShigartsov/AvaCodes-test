/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
import axios from 'axios';
import { IPeopleResponseData } from './types'
import { DOMAIN } from '../../utils/contants'
import { ICharacter } from '../../globalTypes/globalTypes'

export const getCharacters = () => async ():Promise<void> => {
  const allCharacters: ICharacter[] = []

  let nextPageUrl: string | null = `${DOMAIN}/people/?page=1`

  while (nextPageUrl !== null) {
    await axios.get<IPeopleResponseData>(nextPageUrl)
      .then(({ data, status }) => {
        if (status !== 200) nextPageUrl = null

        allCharacters.push(...data.results)
        nextPageUrl = data.next
      })
      .catch((err) => {
        nextPageUrl = null
      })
  }
  const allSpecies: string[] = []
  for (let i = 0; i < allCharacters.length; i++) {
    const current = allCharacters[i]

    if (!current.species.length) continue

    await axios.get(current.species[0])
      .then((res) => {
        allSpecies.push(res.data.name)
      })
      .catch((err) => console.log(err.response))
  }
  console.log(new Set(allSpecies))
}
