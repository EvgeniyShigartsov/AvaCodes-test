import React, { FC } from 'react'
import { Layout, Col } from 'antd'
import { CharacterItem } from './CharacterItem/CharacterItem'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Loader } from '../Loader/Loader'

const { Content } = Layout
export const CharactersList: FC = () => {
  const characters = useTypedSelector((state) => state.characters.characters)
  const isLoading = useTypedSelector((state) => state.characters.isLoading)

  if (isLoading) return <Loader />

  console.log(isLoading)
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
