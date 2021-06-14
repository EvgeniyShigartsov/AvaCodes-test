import React, { FC } from 'react'
import { Layout, Col, message } from 'antd'
import { CharacterItem } from './CharacterItem/CharacterItem'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Loader } from '../Loader/Loader'
import { filteredCharactersSelector, isLoadingSelector, errorSelector } from '../../store/characters/selectors'
import { Empty } from '../Empty/Empty'
import { ICharacter } from '../../globalTypes/globalTypes'
import { useActions } from '../../hooks/useActions'

const { Content } = Layout
export const CharactersList: FC = () => {
  const characters = useTypedSelector(filteredCharactersSelector)
  const isLoading = useTypedSelector(isLoadingSelector)
  const isError = useTypedSelector(errorSelector)
  const { setLastDraggedItem } = useActions()

  const onDragStartHandler = (character: ICharacter) => {
    setLastDraggedItem(character)
  }

  if (isLoading) return <Loader />
  if (!characters.length) return <Empty type="CharactersList" />
  if (isError) {
    message.warn(isError, 3)
    return null
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
