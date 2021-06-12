import React, { FC } from 'react'
import { Layout, Col } from 'antd'
import { CharacterItem } from './CharacterItem/CharacterItem'

const { Content } = Layout
export const CharactersList: FC = () => (
  <Content>
    <Col span={6} push={2}>
      <CharacterItem />
      <CharacterItem />
      <CharacterItem />
      <CharacterItem />
    </Col>
  </Content>
)
