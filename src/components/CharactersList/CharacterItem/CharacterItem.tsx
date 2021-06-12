import React, { FC, useState } from 'react'

export const CharacterItem: FC = () => {
  const [showBody, setShowBody] = useState<boolean>(false)

  return (
    <div className="character-wrapper">
      <div className="character-title" onClick={() => setShowBody((prev) => !prev)}>
        <span className="character-number">1.</span>
        <span className="character-name">
          Han Solo
        </span>
      </div>
      {showBody && (
      <div className="character-body">
        <div className="character-spesies">Species: Human</div>
        <div className="character-data">
          <span className="character-data-title">Movies:</span>
          <ul className="character-list-data">
            <li>Episode IV</li>
            <li>Episode V</li>
            <li>Episode VI</li>
            <li>Episode VII</li>
          </ul>
        </div>
        <div className="character-data">
          <span className="character-data-title">Spaceships:</span>
          <ul>
            <li>Millenium Falcon</li>
            <li>Imperial shuttle</li>
          </ul>
        </div>
        <div />
      </div>
      )}
    </div>
  )
}
