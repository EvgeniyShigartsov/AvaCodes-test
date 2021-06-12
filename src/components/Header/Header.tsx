import { Layout, Row } from 'antd'
import React, { FC } from 'react'
import { Title } from './Title/Title'
import { Filter } from './Filter/Filter'

const { Header: AntdHeader } = Layout

export const Header: FC = () => (
  <AntdHeader>
    <Row>
      <Title />
      <Filter />
    </Row>
  </AntdHeader>
)
