import React, { FC } from 'react'
import { Layout, Row } from 'antd'
import { Header } from './components/Header/Header'
import { CharactersList } from './components/CharactersList/CharactersList'

const App: FC = () => (
  <Layout>
    <Header />
    <Layout>
      <Row>
        <CharactersList />
      </Row>
    </Layout>
  </Layout>
)

export default App;
