import React, { FC, useEffect } from 'react'
import { Layout, Row } from 'antd'
import { Header } from './components/Header/Header'
import { CharactersList } from './components/CharactersList/CharactersList'
import { useActions } from './hooks/useActions'
import { FavoritesList } from './components/FavoritesList/FavoritesList'

const App: FC = () => {
  const { setFullCharactersData, setFavoritesList } = useActions()
  useEffect(() => {
    setFullCharactersData()
    setFavoritesList()
  }, [])

  return (
    <Layout>
      <Header />
      <Layout>
        <Row>
          <CharactersList />
          <FavoritesList />
        </Row>
      </Layout>
    </Layout>
  )
}

export default App;
