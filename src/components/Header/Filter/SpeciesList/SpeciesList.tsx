import React, { FC } from 'react'
import { Select, Col } from 'antd'

const { Option } = Select

export const SpeciesList: FC = () => (
  <Col span={6}>
    <Select defaultValue="allSpecies" style={{ width: 160 }} size="large" onChange={() => null}>
      <Option value="allSpecies">All Species</Option>
      <Option value="jack">Human</Option>
      <Option value="lucy">Robot</Option>
      <Option value="yiminghe">Dart Wader</Option>
    </Select>
  </Col>
)
