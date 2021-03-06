import React, { Component } from 'react';
import { Spin, Card, Input, message } from 'antd';
import { connect } from 'dva';

const Search = Input.Search;
const { Meta } = Card;

// 注意@connect必须放在export default class前面
@connect(app => app)
class userDate extends Component {
  constructor(props) {
    super(props);
    this.inputFouse = React.createRef();
  }

  setName(value) {
    // console.log(value);
    if (!value.trim()) {
      message.info('搜索内容不能为空');
      return;
    }
    const { dispatch } = this.props;
    dispatch({
      type: 'app/getInfo', // 用dispatch触发action来请求接口
      payload: value, // 传递给medels中的app里的getInfo方法的参数
    });
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'app/getInfo',
      payload: 'feiyuWeb',
    });
  }

  render() {
    const { userInfo, title } = this.props.app;
    console.log(this.props.app, '66');
    return (
      <div>
        <p>{title}</p>
        <Search
          placeholder="input search text"
          style={{ width: '200px' }}
          onSearch={value => this.setName(value)}
          enterButton
          ref={this.inputFouse}
        />
        {Object.keys(userInfo).length === 0 ? (
          <Spin size="large" tip="Loading..." />
        ) : (
          <div>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={userInfo.avatar_url} />}
            >
              <Meta title={userInfo.bio} description={userInfo.html_url} />
            </Card>
          </div>
        )}
      </div>
    );
  }
}

export default userDate;
