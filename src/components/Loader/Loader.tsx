import React, { FC } from 'react'
import {
  Spin, Layout, Col, Row,
} from 'antd'

const { Content } = Layout
export const Loader: FC = () => (
  <Content>
    <Row justify="center" align="middle" className="loader-box">
      <Col span={24}>
        <Spin size="large" tip="Loading characters data..." style={{ width: '100%', height: '100%' }} />
      </Col>
    </Row>
  </Content>
)
