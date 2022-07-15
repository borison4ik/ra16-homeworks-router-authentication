import React, { useContext, useEffect } from 'react';
import { Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';

import { SingleNew } from '../components/SingleNew';

import AuthContext from '../contexts/AuthContext';

import './index.scss';

export const SingleNewsPage: React.FC = () => {
  const { token } = useContext(AuthContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate('/');
  }, []);

  return (
    <Row className='page-content'>
      <Col span={24}>{token && <SingleNew />}</Col>
    </Row>
  );
};
