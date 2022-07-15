import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './components/AuthProvider';

import { PageLayout } from './layout/PageLayout';
import { Home } from './pages/Home';
import { NewsPage } from './pages/NewsPage';
import { SingleNewsPage } from './pages/SingleNewsPage';
import { Error404 } from './pages/Error404';

import './app.scss';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path='news' element={<NewsPage />} />
            <Route path='news/:pageId' element={<SingleNewsPage />} />
            <Route path='*' element={<Error404 />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
