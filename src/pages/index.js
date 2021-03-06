import styles from './index.scss';
import Link from 'umi/link';
import { Tag } from 'antd';

/*
 * 首页
 */

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <p>
        To get started, edit <code>src/pages/index.js</code> and save to reload.
      </p>
      <ul className={styles.list}>
        <li>
          <Tag color="blue">
            <Link to="/blog">blog</Link>
          </Tag>
        </li>
        <li>
          <Tag color="red">
            <Link to="/about">about</Link>
          </Tag>
        </li>
        <li>
          <Tag color="#2db7f5">
            <Link to="/test">test</Link>
          </Tag>
        </li>
        <li>
          <Tag color="#87d068">
            <Link to="/count">count</Link>
          </Tag>
        </li>
        <li>
          <Tag color="#108ee9">
            <Link to="/hook">hook</Link>
          </Tag>
        </li>
        <li>
          <Tag color="purple">
            <Link to="/getDate">getDate</Link>
          </Tag>
        </li>
        <li>
          <Tag color="pink">
            <Link to="/user">user</Link>
          </Tag>
        </li>
        <li>
          <Tag color="#2089a5">
            <Link to="/upImg">upImg</Link>
          </Tag>
        </li>
      </ul>
    </div>
  );
}
