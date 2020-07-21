import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.less';
import AppHeader from './features/AppHeader';

function App() {
  return (
    <Router>
      <div styleName="app">
        <header styleName="header">
          <AppHeader />
        </header>
        <section styleName="member">会员信息</section>
        <section styleName="good">商品列表</section>
        <section styleName="operation">操作栏</section>
        <section styleName="panel">面板</section>
      </div>
    </Router>
  );
}

export default App;
