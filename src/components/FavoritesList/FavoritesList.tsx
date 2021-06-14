import React, { FC } from 'react'
import { Layout, Col } from 'antd'
import { CharacterItem } from '../CharactersList/CharacterItem/CharacterItem'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ICharacter } from '../../globalTypes/globalTypes'

const { Content } = Layout
export const FavoritesList: FC = () => {
  // const dropHandler = (e: React.DragEvent<HTMLDivElement>): void => {
  //   console.log(e)
  // }
  const onDeleteBtnHandler = (character: ICharacter): void => {
    console.log(character)
  }

  return (
    <Content>
      <Col span={12} push={2} onDrop={() => null}>
        <h2>Favorites Characters</h2>
        <div className="favaorites-list" style={{ minHeight: '200px', border: '1px solid lightskyblue' }}>
          {/* {characters.map((character, index) => (
            <CharacterItem
              key={character.url}
              character={character}
              itemNo={index + 1}
              deleteFromFavoritesBtn
              removeFromFaviritesHandler={onDeleteBtnHandler}
            />
          ))} */}
        </div>
      </Col>
    </Content>
  )
}
