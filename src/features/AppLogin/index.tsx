import React from 'react';
import './index.less';
import LoginPanel from './LoginPanel';
import SupportInfo from './SupportInfo';

export default function AppCash() {
  return (
    <div styleName="container">
      <header styleName="header"></header>
      <section styleName="support">
        <SupportInfo />
      </section>
      <section styleName="login">
        <LoginPanel />
      </section>
    </div>
  );
}
