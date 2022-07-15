import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd';
import { $fetch } from 'ohmyfetch';
import { useParams } from 'react-router-dom';

import { Error404 } from '../../pages/Error404';

import AuthContext from '../../contexts/AuthContext';
import { TSingleNew } from '../../@types/TSingleNew';

import './index.scss';

export const SingleNew: React.FC = () => {
  const { token } = useContext(AuthContext);
  const { pageId } = useParams();

  const [page, setPage] = useState<TSingleNew>();

  const getNews = async (token: string) => {
    const singlePage = await $fetch(`${process.env.REACT_APP_USER_NEWS_API}/${pageId}`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }).catch((error) => {
      console.log(error.data.message);
    });
    setPage(singlePage);
  };

  useEffect(() => {
    getNews(token);
  }, []);

  return (
    <div className='news'>
      {page ? (
        <Col className='news-item'>
          <Card title={page.title} cover={<img alt={page.title} src={page.image} />}>
            {page.content}
          </Card>
        </Col>
      ) : (
        <Error404 />
      )}
    </div>
  );
};
