import React, { FC } from 'react'
import { Layout, Col } from 'antd'
import { CharacterItem } from './CharacterItem/CharacterItem'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Loader } from '../Loader/Loader'
import { filteredCharactersSelector, isLoadingSelector } from '../../store/characters/selectors'
import { Empty } from '../Empty/Empty'
import { ICharacter } from '../../globalTypes/globalTypes'

const { Content } = Layout
export const CharactersList: FC = () => {
  const characters = useTypedSelector(filteredCharactersSelector)
  const isLoading = useTypedSelector(isLoadingSelector)

  if (isLoading) return <Loader />
  if (!characters.length) return <Empty />

  const onDragStartHandler = (character: ICharacter) => {
    console.log(character)
  }

  return (
    <Content>
      <Col span={12} push={2}>
        <h2>Selected Characters</h2>
        <div>
          {characters.map((character, index) => (
            <CharacterItem
              key={character.url}
              character={character}
              itemNo={index + 1}
              draggable
              onDragStart={onDragStartHandler}
            />
          ))}
        </div>
      </Col>
    </Content>
  )
}
