import React, { FC, useEffect } from 'react'
import { Layout, Row } from 'antd'
import { Header } from './components/Header/Header'
import { CharactersList } from './components/CharactersList/CharactersList'
import { useActions } from './hooks/useActions'

const App: FC = () => {
  const { getCharacters } = useActions()
  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <Layout>
      <Header />
      <Layout>
        <Row>
          <CharactersList />
        </Row>
      </Layout>
    </Layout>
  )
}

export default App;
