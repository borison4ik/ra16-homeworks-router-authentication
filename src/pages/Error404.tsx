import React, { useContext } from 'react';
import { Row, Col, Typography } from 'antd';

import './index.scss';

const { Title, Text } = Typography;

export const Error404: React.FC = () => {
  return (
    <Row className='page-content'>
      <Col span={24}>
        <div className='greeting'>
          <Title level={1}>
            <Text type='secondary'>404 Page Not found</Text>
          </Title>
        </div>
      </Col>
    </Row>
  );
};
