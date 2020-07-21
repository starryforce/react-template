import React, { FC, useCallback, useEffect, useState } from 'react';
import { notification } from 'antd';
import { useInterval } from '../../hooks';
import './index.less';

const MAX_COUNT = 60;

export interface IProps {
  /** 是否立即发送 */
  immediate?: boolean;
  request(): Promise<any>;
}

const SendCode: FC<IProps> = (props) => {
  const { immediate, request } = props;
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isFirst, changeFirst] = useState(true);

  const sendSMS = useCallback(async () => {
    if (isFirst) changeFirst(false);
    setCount(0);
    setLoading(true);
    const { err } = await request();
    setLoading(false);
    if (err === false) return; // 校验错误
    if (err) {
      notification.open({ message: err.message || '验证码发送失败' });
      return;
    }

    notification.open({ message: '验证码发送成功' });
    setCount(MAX_COUNT);
  }, [isFirst, request]);

  useEffect(() => {
    isFirst && immediate && sendSMS();
  }, [immediate, isFirst, sendSMS]);

  useInterval(() => setCount((c) => c - 1), count > 0 ? 1000 : -1);

  if (count !== 0) return <span styleName="countdown">等待{count}秒</span>;
  return (
    <span onClick={() => !loading && sendSMS()} styleName="notice">
      {isFirst ? '发送验证码' : '重新发送'}
    </span>
  );
};

SendCode.defaultProps = {
  immediate: false,
};

export default SendCode;
