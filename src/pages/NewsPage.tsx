import React, { useContext, useEffect } from 'react';
import { Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';

import { News } from '../components/News';

import AuthContext from '../contexts/AuthContext';

import './index.scss';

export const NewsPage: React.FC = () => {
  const { token } = useContext(AuthContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate('/');
  }, []);

  return (
    <Row className='page-content'>
      <Col span={24}>
        <News />
      </Col>
    </Row>
  );
};
