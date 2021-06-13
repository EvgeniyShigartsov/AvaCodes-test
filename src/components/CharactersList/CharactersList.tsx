import React, { FC } from 'react'
import { Layout, Col } from 'antd'
import { CharacterItem } from './CharacterItem/CharacterItem'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const { Content } = Layout
export const CharactersList: FC = () => {
  const characters = useTypedSelector((state) => state.characters.characters)

  return (
    <Content>
      <Col span={6} push={2}>
        {characters.map((character, index) => (
          <CharacterItem key={character.url} character={character} itemNo={index + 1} />
        ))}
      </Col>
    </Content>
  )
}
