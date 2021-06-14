import React, { FC, useState } from 'react'
import { Button } from 'antd'
import { ICharacter } from '../../../globalTypes/globalTypes'
import { deleteFromFavoritesIcon } from '../../../styles/icons'

interface CharacterItemProps {
  character: ICharacter
  itemNo: number,
  draggable?: boolean
  onDragStart?: ((character: ICharacter) => void) | null
  removeFromFaviritesHandler?: ((character: ICharacter) => void) | null
  deleteFromFavoritesBtn?: boolean
}

export const CharacterItem: FC<CharacterItemProps> = (
  {
    character,
    onDragStart,
    removeFromFaviritesHandler,
    itemNo,
    draggable = false,
    deleteFromFavoritesBtn = false,
  },
) => {
  const [showBody, setShowBody] = useState<boolean>(false)

  const {
    name,
    species,
    films,
    starships,
    birthYear,
  } = character

  const onDragStartHandler = (): void => {
    if (typeof onDragStart === 'function') {
      onDragStart(character)
    }
  }
  const onDeleteFromFavoritesHandler = () => {
    if (typeof removeFromFaviritesHandler === 'function') {
      removeFromFaviritesHandler(character)
    }
  }

  return (
    <div
      className="character-wrapper"
      draggable={draggable}
      onDragStart={onDragStartHandler}
    >
      <div className="character-title" onClick={() => setShowBody((prev) => !prev)}>
        <span className="character-number">
          {itemNo}
          .
        </span>
        <span className="character-name">
          {name}
        </span>
      </div>
      {showBody && (
      <div className="character-body">
        {deleteFromFavoritesBtn && (
          <div className="delete-btn">
            <Button
              size="small"
              icon={deleteFromFavoritesIcon}
              onClick={onDeleteFromFavoritesHandler}
            />
          </div>
        )}
        <div className="character-spesies">
          Species:
          {' '}
          {species}
        </div>
        <div className="character-spesies">
          Birth year:
          {' '}
          {birthYear}
        </div>
        <div className="character-data">
          <span className="character-data-title">Movies:</span>
          <ul className="character-list-data">
            {films.map((film) => <li key={film.episode_id}>{film.title}</li>)}
          </ul>
        </div>
        <div className="character-data">
          <span className="character-data-title">Starships:</span>
          {starships.length ? (
            <ul>
              {starships.map((starship) => <li key={starship.url}>{starship.name}</li>)}
            </ul>
          ) : <span>No starships found.</span> }
        </div>
        <div />
      </div>
      )}
    </div>
  )
}
