import React, { FC } from 'react'
import { Select, Col } from 'antd'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { useActions } from '../../../../hooks/useActions'
import { allMoviesSelector, filterParamsSelector } from '../../../../store/characters/selectors'

const { Option } = Select

export const FilmsList: FC = () => {
  const movies = useTypedSelector(allMoviesSelector)
  const params = useTypedSelector(filterParamsSelector)
  const { filterCharacters } = useActions()

  const onChangeHandler = (movie: string) => {
    const value = movie === 'allMovies' ? null : movie
    filterCharacters({ ...params, movie: value })
  }

  return (
    <Col span={6}>
      <Select
        defaultValue="allMovies"
        className="select-dropdown"
        size="large"
        onChange={onChangeHandler}
      >
        <Option value="allMovies">All Movies</Option>
        {movies.map((movie) => <Option key={movie} value={movie}>{movie}</Option>)}
      </Select>
    </Col>
  )
}
