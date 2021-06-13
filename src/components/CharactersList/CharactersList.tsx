import React, { FC } from 'react'
import { Layout, Col } from 'antd'
import { CharacterItem } from './CharacterItem/CharacterItem'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Loader } from '../Loader/Loader'
import { filteredCharactersSelector, isLoadingSelector } from '../../store/characters/selectors'
import { Empty } from '../Empty/Empty'

const { Content } = Layout
export const CharactersList: FC = () => {
  const characters = useTypedSelector(filteredCharactersSelector)
  const isLoading = useTypedSelector(isLoadingSelector)

  if (isLoading) return <Loader />
  if (!characters.length) return <Empty />

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
