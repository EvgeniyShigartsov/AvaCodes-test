export interface IFilm {
  title: string,
  episode_id: number,
}
export interface IStarship {
  name: string,
  url: string,
}

export interface ICharacter {
  name: string,
  species: string,
  birthYear: string,
  url: string,
  films: IFilm[],
  starships: IStarship[],
}
