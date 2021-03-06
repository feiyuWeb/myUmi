import React, { useState, useEffect, useRef, useMemo, memo, useCallback } from 'react';
import { Button, Input } from 'antd';

//const Hook = () => {
//const [count, setCount] = useState(0);
//const ref = useRef(null);
//const btnRef = useRef(null); // useRef可以获取到原生的dom元素

// useEffect(
//   () => {
//     const timer = setInterval(() => {
//       console.log(count);
//       setCount(count + 1);
//     }, 500);
//     return () => {
//       // return ()=>{} 函数作为清理函数，会在count依赖项发生变化时执行,相当于class中的componentWillUnmount
//       clearInterval(timer);
//     };
//   },
//   [count],
// );

// useEffect(() => {
//   console.log(ref.current);
//   ref.current = count + 1;
//   setTimeout(() => {
//     console.log(ref);
//   }, 3000);
// }, []);

//   const handleAdd = () => {
//     setCount(count + 1);
//   };

//   useEffect(
//     () => {
//       console.log(btnRef.current);
//       btnRef.current.addEventListener('click', handleAdd, false);
//       return () => {
//         btnRef.current.removeEventListener('click', handleAdd, false);
//       };
//     },
//     [count],
//   );

//   return (
//     <div>
//       <div>count:{count}</div>
//       <button type="primary" ref={btnRef}>
//         增加
//       </button>
//     </div>
//   );
// };

const Child = memo(
  props => {
    // memo包含的组件传参没有改变时，组件不重新会渲染
    const date = new Date();
    const [hour, min, second] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    return (
      <div>
        当前时间：{hour}:{min}:{second}
        <div>
          <Input placeholder="default size" style={{ width: '300px' }} onChange={props.onChange} />
        </div>
      </div>
    );
  },
  (prev, next) => {
    // (prev,next)=>{} 回调函数可以更精细地控制组件的渲染，prev,next 分别为前一次和后一次的props
    console.log(prev, next);
    return prev.count === next.count; // retur为false会重新渲染，true则不会
  },
);

const Parent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [timeCount, setTimeCount] = useState(0);

  const handleChange = useCallback(e => {
    setText(e.target.value);
  }, []);

  // Child子组件上的传参timeCount变化时，memo包含的组件就可以重新渲染了
  return (
    <>
      <div>count:{count}</div>
      <div>text:{text}</div>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        增加
      </Button>
      <Button onClick={() => setTimeCount(timeCount + 1)}>获取当前时间</Button>
      <Child count={timeCount} onChange={handleChange} />
    </>
  );
};

function App() {
  return (
    <>
      <Parent />
      <Hook />
    </>
  );
}

/*-------*/
const Hook = () => {
  const [width, setWidth] = useState('0px');
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    // 设置初始值
    setWidth(document.documentElement.clientWidth);
    setHeight(document.documentElement.clientHeight);

    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
      setHeight(document.documentElement.clientHeight);
    };
    window.addEventListener('resize', handleResize, false); // 监听窗口变化
    return () => {
      window.removeEventListener('resize', handleResize, false); // 移除监听
    };
  }, []);

  return (
    <div>
      size:{width}*{height}
    </div>
  );
};

export default App;
