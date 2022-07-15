import React, { useContext } from 'react';
import { Row, Col } from 'antd';

import { Greeting } from '../components/Greeting';

import AuthContext from '../contexts/AuthContext';

import './index.scss';

export const Home: React.FC = () => {
  const { token } = useContext(AuthContext);
  console.log(token);
  return (
    <Row className='page-content'>
      <Col span={24}>
        <Greeting />
      </Col>
    </Row>
  );
};
