import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd';
import { $fetch } from 'ohmyfetch';

import AuthContext from '../../contexts/AuthContext';

import './index.scss';
import { Link, useNavigate } from 'react-router-dom';

type TNewItem = {
  id: string;
  title: string;
  image: string;
  content: string;
};

export const News: React.FC = () => {
  const [news, setNews] = useState<TNewItem[]>([]);
  const { token } = useContext(AuthContext);

  console.log(news);

  const getNews = async (token: string) => {
    const news = await $fetch(`${process.env.REACT_APP_USER_NEWS_API}`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }).catch((error) => console.log(error.data));
    setNews(news);
  };

  useEffect(() => {
    getNews(token);
  }, []);

  return (
    <div className='news'>
      <Row>
        {news.map((item) => (
          <Col key={item.id} span={8} className='news-item'>
            <Card title={item.title} extra={<Link to={`/news/${item.id}`}>More</Link>} cover={<img alt={item.title} src={item.image} />}>
              {item.content}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
