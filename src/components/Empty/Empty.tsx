import React, { FC } from 'react'
import {
  Empty as AntdEmpty,
  Layout,
  Row,
  Col,
} from 'antd'

const { Content } = Layout

interface IEmptyProps {
  type: 'FavoritesList' | 'CharactersList'
}

export const Empty: FC<IEmptyProps> = ({ type }) => {
  switch (type) {
    case 'CharactersList':
      return (
        <Content>
          <Row align="middle">
            <Col span={6} push={2}>
              <AntdEmpty className="empty" description={<span>No characters found with this criteries.</span>} />
            </Col>
          </Row>
        </Content>
      )
    case 'FavoritesList':
      return (
        <Content>
          <AntdEmpty className="empty" description={<span>Add favorite character!</span>} />
        </Content>
      )
    default:
      return null
  }
}
