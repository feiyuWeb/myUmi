import React, { useState, useEffect, useRef, useCallback, Suspense } from 'react';
import { Button, Input, message } from 'antd';
//  懒加载组件codeing-split
const UserInfo = React.lazy(() => import('@/components/UserInfo'));

function Example() {
  // 声明一个新的状态变量，我们将其称为'count'
  const [count, setCount] = useState(0); // useState(0) 表示state的默认初始值为0
  const [fruit, setFruit] = useState('banana');
  const [userName, setName] = useState('feiyuWeb');
  const inputFouse = useRef(null);
  useEffect(
    () => {
      document.title = `you clicked ${count} times`;
      // inputFouse.current.focus(); // 初始化input输入框获取焦点
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

  const hanldleSet = useCallback(value => {
    if (!value.trim()) {
      message.error('请输入要搜索的关键词哦');
      return false;
    }
    setName(value);
  }, []);

  const Search = Input.Search;
  return (
    <div>
      <p>
        you clicked {count} times {fruit}
      </p>
      <Button
        type="primary"
        onClick={() => {
          setCount(count + 1);
          inputFouse.current.focus(); // 点击button时input输入框获取焦点
        }}
      >
        click me
      </Button>
      <br />
      <Button onClick={() => setFruit('哈哈哈哈')}>点击</Button>
      <Search
        placeholder="input search text"
        style={{ width: '200px' }}
        onSearch={value => hanldleSet(value)}
        enterButton
        ref={inputFouse}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <UserInfo title="个人信息" name={userName} />
      </Suspense>
    </div>
  );
}

export default Example;
