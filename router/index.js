import Router from "next/router";

//拦截器
// Router.beforePopState(({ url, as, options }) => {

//   return true
// });

//路由开始切换时触发
Router.events.on("routeChangeStart", url => {
  console.log(`routeChangeStart : ${url}`);
});

//完成路由切换时触发
Router.events.on("routeChangeComplete", url => {
  console.log(`routeChangeComplete : ${url}`);
});

//路由切换报错时触发
Router.events.on("routeChangeError", (err, url) => {
  console.log(`routeChangeError : ${url}, error: ${err}`);
});

//浏览器 history 模式开始切换时触发
Router.events.on("beforeHistoryChange", url => {
  console.log(`beforeHistoryChange : ${url}`);
});

//开始切换 hash 值但是没有切换页面路由时触发
Router.events.on("hashChangeStart", url => {
  console.log(`hashChangeStart : ${url}`);
});

//完成切换 hash 值但是没有切换页面路由时触发
Router.events.on("hashChangeComplete", url => {
  console.log(`hashChangeComplete : ${url}`);
});

export default Router;
