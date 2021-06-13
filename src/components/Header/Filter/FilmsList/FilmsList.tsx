import React, { FC, useEffect } from 'react'
import { Select, Col } from 'antd'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { useActions } from '../../../../hooks/useActions'
import { allMoviesSelector } from '../../../../store/characters/selectors'

const { Option } = Select

export const FilmsList: FC = () => {
  const movies = useTypedSelector(allMoviesSelector)

  return (
    <Col span={6}>
      <Select defaultValue="allMovies" className="select-dropdown" size="large" onChange={() => null}>
        <Option value="allMovies">All Movies</Option>
        {movies.map((movie) => <Option key={movie} value={movie}>{movie}</Option>)}
      </Select>
    </Col>
  )
}
