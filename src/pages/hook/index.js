import { useState, useEffect } from 'react';
import UserInfo from '@/components/UserInfo';
import { Button } from 'antd';
function Example() {
  // 声明一个新的状态变量，我们将其称为'count'
  const [count, setCount] = useState(0); // useState(0) 表示state的默认初始值为0
  const [fruit, setFruit] = useState('banana');

  useEffect(
    () => {
      document.title = `you clicked ${count} times`;
    },
    [count], //  useEffect 的第一个参数为一个箭头函数，第二个参数为一个数组,[count]表示只有在count改变后才会重新渲染
  );

  useEffect(
    () => {
      const timer = setTimeout(() => {
        setFruit('orange');
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    },
    [fruit],
  );

  return (
    <div>
      <p>
        you clicked {count} times {fruit}
      </p>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        click me
      </Button>
      <br />
      <Button onClick={() => setFruit('哈哈哈哈')}>点击</Button>
      <UserInfo title="个人信息" />
    </div>
  );
}

export default Example;
