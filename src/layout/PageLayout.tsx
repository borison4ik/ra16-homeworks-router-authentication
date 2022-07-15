import React from 'react';
import { Layout, Typography } from 'antd';
import { Outlet } from 'react-router-dom';

import { Logo } from '../components/Logo';
import { UserProfile } from '../components/UserProfile';

import { DATA } from '../data';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

export const PageLayout = () => {
  return (
    <Layout>
      <Header className='app-header'>
        <Title level={4}>
          <Text type='secondary'>{DATA.task.title}</Text>
        </Title>
      </Header>
      <div className='auth-header'>
        <Logo />
        <UserProfile />
      </div>
      <Content className='app-content'>
        <Outlet />
      </Content>
    </Layout>
  );
};
