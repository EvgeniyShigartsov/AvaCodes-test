import React, { FC, useEffect } from 'react'
import { Col, Row } from 'antd'
import { FilmsList } from './FilmsList/FilmsList'
import { SpeciesList } from './SpeciesList/SpeciesList'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { allCharactersSelector } from '../../../store/characters/selectors'
import { useActions } from '../../../hooks/useActions'
import { YearsSlider } from './YearsSlider/YearsSlider'

export const Filter: FC = () => {
  const characters = useTypedSelector(allCharactersSelector)
  const { setFilterData } = useActions()

  useEffect(() => {
    setFilterData(characters)
  }, [characters])
  return (
    <Col span={18}>
      <Row align="middle">
        <FilmsList />
        <SpeciesList />
        <YearsSlider />
      </Row>
    </Col>
  )
}
