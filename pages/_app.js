import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import store from '../store/store'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <Provider store={ store }>
          <LocaleProvider locale={ zh_CN }>
            <Component {...pageProps} />
          </LocaleProvider>
        </Provider>
      </Container>
    )
  }
}