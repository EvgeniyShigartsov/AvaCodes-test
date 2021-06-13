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
export interface IFilterParams {
  movie: string,
  species: string,
  birth_year: string
}

export interface IFilterOptions{
  movies: string[],
  species: string[],
  birth_year?: string[]
}
