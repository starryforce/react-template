import React, { useEffect, useState } from 'react';
import { Divider, Avatar, Space } from 'antd';
import moment from 'moment';
import './index.less';
import logo from '../../assets/images/lakala_logo.png';
import AppIcon from '../../components/AppIcon';

moment.updateLocale('en', {
  weekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
});

type AppHeaderProps = { storeName?: string; cashierName?: string };

export default function AppHeader(props: AppHeaderProps) {
  const { storeName = '懒羊羊的小店', cashierName = '懒羊羊' } = props;
  const [clock, setClock] = useState('');
  useEffect(() => {
    const timer = window.setInterval(() => {
      setClock(moment().format('M月D日 dddd HH:mm:ss'));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div styleName="container">
      <div styleName="info">
        <img styleName="logo" src={logo} alt="拉卡拉"></img>
        <Divider type="vertical" style={{ margin: '0 20px', height: '15px' }} />
        <Space>
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            size={30}
            style={{ verticalAlign: 'bottom' }}
          />
          {storeName}
        </Space>
        <Divider type="vertical" style={{ margin: '0 20px', height: '15px' }} />
        <Space>
          <AppIcon type="icon-shipin" />
          收银员：{cashierName}
        </Space>
      </div>
      <div>{clock}</div>
      <div>
        <Space>
          <AppIcon type="icon-jianpan" />
          快捷键
          <AppIcon type="icon-diannao" />
          <AppIcon type="icon-wifi" />
          <AppIcon type="icon-zuixiaohua" />
          <AppIcon type="icon-zhengchang" />
          <AppIcon type="icon-zuidahua" />
          <AppIcon type="icon-guanbi1" />
        </Space>
      </div>
    </div>
  );
}
