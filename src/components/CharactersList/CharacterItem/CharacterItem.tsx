import React, { FC, useState, DragEvent } from 'react'
import { ICharacter } from '../../../globalTypes/globalTypes'

interface CharacterItemProps {
  character: ICharacter
  itemNo: number,
  draggable?: boolean
  // onDrag?: (e: React.DragEvent<HTMLDivElement>, character: ICharacter) => void
}

export const CharacterItem: FC<CharacterItemProps> = ({
  character, itemNo, draggable = false,
}) => {
  const [showBody, setShowBody] = useState<boolean>(false)

  const {
    name,
    species,
    films,
    starships,
    birthYear,
  } = character

  const onDragHandler = (e: DragEvent<HTMLDivElement>, character: ICharacter): void => {
    // console.log(e)
  }
  const onDragStart = (e: DragEvent<HTMLDivElement>, character: ICharacter) => {
    console.log(e)
  }
  return (
    <div
      className="character-wrapper"
      draggable={draggable}
      onDragStart={(e) => onDragStart(e, character)}
      // onDrag={(e) => onDragHandler(e, character)}
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
