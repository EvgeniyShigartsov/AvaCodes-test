import React, { FC } from 'react'
import { Select, Col } from 'antd'

const { Option } = Select

export const FilmsList: FC = () => (
  <Col span={6}>
    <Select defaultValue="allMovies" style={{ width: 160 }} size="large" onChange={() => null}>
      <Option value="allMovies">All Movies</Option>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="yiminghe">yiminghe</Option>
    </Select>
  </Col>
)
