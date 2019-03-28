import React, { Component } from "react";
import Link from "../router/Link";
import { connect } from "react-redux";

import Head from "next/head";

import css from "./index.less";

class Main extends Component {
  /**
   * 异步获取 JS 普通对象，并绑定在props上
   * getInitialProps只会加载在服务端。只有当路由跳转（Link组件跳转或 API 方法跳转）时，客户端才会执行
   * getInitialProps将不能使用在子组件中。只能使用在pages页面中。
   *
   */
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    return { userAgent };
  }

  render() {
    return (
      <div>
        <Head>
          <title>my page title</title>
          <meta
            key="viewport"
            name="viewport"
            content="initial-scale=1.0,width=device-width"
          />
          <meta charSet="utf-8" />
        </Head>
        <div className={css.home}>hello world {this.props.userAgent}</div>
        <div>
          <Link href={{ pathname: "/about", query: { name: "Minh" } }}>
            to read more
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(({ home }) => {
  return {
    ...home
  };
})(Main);
