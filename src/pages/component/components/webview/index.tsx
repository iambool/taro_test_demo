import React from 'react'
import { 
  WebView, 
  View,
  ScrollView,
} from '@tarojs/components'
import './index.scss'

/**
 * 注意：webview必须设置高度，否则出不来
 * src
 */


export default class Index extends React.Component {
  handleMessage() {
    alert('I got a message')
  }
  render () {
    return (
      <ScrollView>
        <WebView
          src='https://www.baidu.com/'
          style={{height: 680}}
          onMessage={this.handleMessage}
        />
      </ScrollView>
    )
  }
}
