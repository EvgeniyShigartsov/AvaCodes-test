import React, { FC } from 'react'
import { Layout, Col } from 'antd'
import { CharacterItem } from '../CharactersList/CharacterItem/CharacterItem'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { filteredCharactersSelector } from '../../store/characters/selectors'

const { Content } = Layout
export const FavoritesList: FC = () => {
  const characters = useTypedSelector(filteredCharactersSelector)

  const dropHandler = (e: React.DragEvent<HTMLDivElement>): void => {
    console.log(e)
  }

  const onDragOverHandler = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault()

    // console.log(e)
  }
  return (
    <Content>
      <Col span={12} push={2} onDragOver={onDragOverHandler} onDrop={dropHandler} style={{ minHeight: '200px', border: '3px solid tomato' }}>
        {/* {characters.map((character, index) => (
          <CharacterItem key={character.url} character={character} itemNo={index + 1} />
        ))} */}
      </Col>
    </Content>
  )
}
