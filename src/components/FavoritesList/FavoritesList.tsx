import React, { FC, DragEvent } from 'react'
import { Layout, Col } from 'antd'
import { CharacterItem } from '../CharactersList/CharacterItem/CharacterItem'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ICharacter } from '../../globalTypes/globalTypes'
import { lastDraggedItemSelector, favoritesListSelector } from '../../store/favorites/selectors'
import { useActions } from '../../hooks/useActions'
import { Empty } from '../Empty/Empty'

const { Content } = Layout
export const FavoritesList: FC = () => {
  const lastDraggedItem = useTypedSelector(lastDraggedItemSelector)
  const favorites = useTypedSelector(favoritesListSelector)
  const { addNewCharacter, deleteCharacter } = useActions()

  const dropHandler = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault()
    addNewCharacter(lastDraggedItem)
  }

  const onDragOverPrevented = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault()
  }

  const onDeleteBtnHandler = (character: ICharacter): void => {
    deleteCharacter(character.url)
  }

  const list = favorites.map((character, index) => (
    <CharacterItem
      key={character.url}
      character={character}
      itemNo={index + 1}
      deleteFromFavoritesBtn
      removeFromFaviritesHandler={onDeleteBtnHandler}
    />
  ))

  return (
    <Content>
      <Col span={12} push={2}>
        <h2>Favorites Characters</h2>
        <div
          className="favorites-list"
          onDrop={dropHandler}
          onDragOver={onDragOverPrevented}
        >
          {favorites.length ? list : <Empty type="FavoritesList" />}
        </div>
      </Col>
    </Content>
  )
}
