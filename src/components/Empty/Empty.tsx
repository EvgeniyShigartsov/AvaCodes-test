import React, { FC } from 'react'
import {
  Empty as AntdEmpty,
  Layout,
  Row,
  Col,
} from 'antd'

const { Content } = Layout

export const Empty: FC = () => (
  <Content>
    <Row align="middle">
      <Col span={6} push={2}>
        <AntdEmpty className="empty" description={<span>No characters found with this criteries.</span>} />
      </Col>
    </Row>
  </Content>
)
