export default {
  pages: [
    'pages/index/index', // 简单说明
    'pages/api/index', // API测试入口
    'pages/component/index', // 组件测试入口
    // api测试页面
    'pages/api/apis/index',
    'pages/api/apis/network/index',
    'pages/api/apis/surface/index',
    'pages/api/apis/router/index',
    'pages/api/apis/authority/index', // 权限相关api
    'pages/api/apis/getOpenerEventChannel/index',
    'pages/api/apis/getOpenerEventChannel/demo/index',
    'pages/api/apis/surface/interactive/index',
    'pages/api/apis/surface/navigationBar/index',
    'pages/api/apis/surface/backgroundColor/index',
    'pages/api/apis/surface/tabBar/index',
    'pages/api/apis/surface/scroll/index',
    'pages/api/apis/surface/window/index',
    'pages/api/apis/surface/keyboard/index',
    'pages/api/apis/media/camera/index',
    'pages/api/apis/accelerometer/index',
    // 组件测试页面
    'pages/component/components/view/index',
    'pages/component/components/scrollview/index',
    'pages/component/components/swiper/index',
    'pages/component/components/movableview/index',
    'pages/component/components/icon/index',
    'pages/component/components/text/index',
    'pages/component/components/progress/index',
    'pages/component/components/richText/index',
    'pages/component/components/form/index',
    'pages/component/components/textarea/index',
    'pages/component/components/button/index',
    'pages/component/components/checkbox/index',
    'pages/component/components/input/index',
    'pages/component/components/webview/index',
    'pages/component/components/image/index',
    'pages/component/components/camera/index',
    // 媒体组件
    'pages/component/components/video/index',
    // 其他测试页面
    'pages/home/index',
    'pages/login/index',
    
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#222',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white',
    backgroundColor: 'white'
  },
  tabBar:{
    color: '#aaa', // tab上的文字默认颜色
    selectedColor: '#fff', // 文字选中时的颜色
    backgroundColor: '#222', // tab的背景色
    borderStyle: 'black', // tabbar 上边框的颜色
    list:[
      {
        pagePath: 'pages/index/index',
        text: '首页',
        // iconPath:'@img/index.png',
        iconPath: 'https://www.baidu.com/aladdin/tpl/dict3/repeat_static.aa99d64b.png',
        selectedIconPath: 'https://img2.bdstatic.com/static/common/widget/shitu/images/mark_cac9c0b.png',
      },
      {
        pagePath: 'pages/component/index',
        text: '组件',
        iconPath:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2718219500,1861579782&fm=26&gp=0.jpg',
        selectedIconPath:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1616748608,1921882791&fm=26&gp=0.jpg',
      },
      {
        pagePath: 'pages/api/index',
        text: 'API',
        iconPath:'http://demo.sc.chinaz.com/Files/pic/icons/7946/f4.png',
        selectedIconPath:'http://demo.sc.chinaz.com/Files/pic/icons/7946/f5.png',
      }
    ],
  }
}
