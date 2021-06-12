import React, { FC } from 'react'
import { Col, Row } from 'antd'
import { FilmsList } from './FilmsList/FilmsList'
import { SpeciesList } from './SpeciesList/SpeciesList'

export const Filter: FC = () => (
  <Col span={18}>
    <Row>
      <FilmsList />
      <SpeciesList />
    </Row>
  </Col>
)
