import React, { useState } from 'react';
import { Button } from 'antd';
import AppIcon from '../../components/AppIcon';
import SendCode from '../../components/SendCode';
import './LoginPanel.less';

type LoginType = 'password' | 'sms' | 'qr';

const loginTypeMap = {
  password: {
    title: '密码登录',
  },
  sms: {
    title: '验证码登录',
  },
  qr: {
    title: '扫码登录',
  },
};

export default function LoginPanel() {
  const [loginType, setLoginType] = useState<LoginType>('sms');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isOffline, setIsOffline] = useState(true);
  if (isOffline && loginType !== 'password') {
    setLoginType('password');
  }

  return (
    <div styleName="container">
      <header styleName="header">
        <span>{loginTypeMap[loginType].title}</span>
        {!isOffline && loginType === 'qr' && (
          <AppIcon
            type="icon-mima"
            style={{ fontSize: 44, color: '#00aeeb' }}
            onClick={() => setLoginType('password')}
          />
        )}
        {!isOffline && loginType !== 'qr' && (
          <AppIcon
            type="icon-erweima"
            style={{ fontSize: 44, color: '#00aeeb' }}
            onClick={() => setLoginType('qr')}
          />
        )}
        {isOffline && <AppIcon type="icon-wentixiuxian" style={{ fontSize: 44 }} />}
      </header>
      {loginType !== 'qr' && (
        <section styleName="content">
          <div styleName="error-message">该用户不存在</div>
          <div styleName="input-container">
            <span styleName="prefix">手机号</span>
            <input styleName="input-box" placeholder="请输入绑定的手机号" />
            <span styleName="suffix">
              <AppIcon
                type="icon-jianpan"
                style={{ fontSize: 26 }}
                onClick={() => setIsShowPassword(false)}
              />
            </span>
          </div>
          {loginType === 'password' && (
            <div styleName="input-container">
              <span styleName="prefix">密码</span>
              <input
                styleName="input-box"
                type={isShowPassword ? 'text' : 'password'}
                placeholder="请输入密码"
              />
              <span styleName="suffix">
                {isShowPassword && (
                  <AppIcon
                    type="icon-eye-open"
                    style={{ fontSize: 26 }}
                    onClick={() => setIsShowPassword(false)}
                  />
                )}
                {!isShowPassword && (
                  <AppIcon type="icon-eye-close" onClick={() => setIsShowPassword(true)} />
                )}
              </span>
            </div>
          )}
          {loginType === 'sms' && (
            <div styleName="input-container">
              <span styleName="prefix">验证码</span>
              <input styleName="input-box" placeholder="请输入验证码" />
              <span styleName="suffix">
                <SendCode request={() => Promise.resolve({ err: undefined })} />
              </span>
            </div>
          )}
          <Button
            type="primary"
            block
            shape="round"
            size="large"
            style={{ height: 55, fontSize: 18 }}>
            登录
          </Button>
          {loginType === 'password' && !isOffline && (
            <Button
              type="link"
              style={{ color: '#000', fontSize: 18 }}
              block
              onClick={() => setLoginType('sms')}>
              短信验证码登录
            </Button>
          )}
          {loginType === 'password' && isOffline && (
            <Button
              type="link"
              style={{ color: '#000', fontSize: 18 }}
              block
              onClick={() => setIsOffline(false)}>
              返回连网登录
            </Button>
          )}
          {loginType === 'sms' && (
            <Button
              type="link"
              block
              style={{ color: '#000', fontSize: 18 }}
              onClick={() => setLoginType('password')}>
              密码登录
            </Button>
          )}
        </section>
      )}
      {loginType === 'qr' && (
        <section styleName="content">
          <img src=""></img>
        </section>
      )}
    </div>
  );
}
