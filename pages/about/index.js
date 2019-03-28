import React, { Component } from "react";
import { connect } from 'react-redux'
import {
  initProject
} from '../../action/about'

import {
  Button
} from 'antd'

import css from "./index.less";

class About extends Component {
  /**
   * 异步获取 JS 普通对象，并绑定在props上
   * getInitialProps只会加载在服务端。只有当路由跳转（Link组件跳转或 API 方法跳转）时，客户端才会执行
   * getInitialProps将不能使用在子组件中。只能使用在pages页面中。
   *
   */
  static async getInitialProps(obj) {
  }

  componentWillMount() {
    this.props.dispatch(initProject())
  }

  render() {
    const {
      project
    } = this.props;
    return (
      <div>
        Welcome to About! project: {project}
        <Button>test</Button>
      </div>
    );
  }
}

export default connect(({about}) => {
  return {
    ...about
  }
})(About)
