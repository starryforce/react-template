import { useEffect, useRef } from 'react';

/**
 *
 * @param callback
 * @param delay  <0: 取消执行, 单位:毫秒
 */
export default function useTimeout(callback: () => void, delay: number) {
  const savedCallback: any = useRef<typeof callback>();

  savedCallback.current = callback;

  useEffect(() => {
    if (delay < 0) return;
    const tick = () => savedCallback.current();
    const id = setTimeout(tick, delay);
    return () => clearTimeout(id);
  }, [delay]);
}
