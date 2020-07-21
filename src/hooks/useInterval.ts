import { useEffect, useRef } from 'react';

/**
 *
 * @param callback
 * @param delay  <0: 取消执行, 单位:毫秒
 */
export default function useInterval(callback: () => void, delay: number) {
  const savedCallback: any = useRef<typeof callback>();

  savedCallback.current = callback;

  useEffect(() => {
    if (delay < 0) return;
    const tick = () => savedCallback.current();
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
