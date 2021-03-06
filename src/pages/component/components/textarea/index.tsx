import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { Textarea, View, Icon, Button } from '@tarojs/components'
// import { ViewProps } from '@tarojs/components/types/View'
import './index.scss'

// interface TestParams {
//   testTitle: string;
//   testComment: string;
//   testConfig: ViewProps;
// }

// // 通用测试用例
// const commonTestCase:Array<TestParams> = [
//   {
//     testTitle: 'hoverStyle',
//     testComment: '按下去时区域会变色',
//     testConfig: {
//       hoverStyle: {backgroundColor: 'red'}
//     },
//   },
//   {
//     testTitle: 'hoverStartTime',
//     testComment: '按下去2秒后才会变色',
//     testConfig: {
//       hoverStyle: {backgroundColor: 'red'},
//       hoverStartTime:2000
//     },
//   },
//   {
//     testTitle: 'hoverStayTime',
//     testComment: '按下去后变色会持续较长时间',
//     testConfig: {
//       hoverStyle: {backgroundColor: 'red'},
//       hoverStayTime:2000
//     },
//   },
// ]

export default class Index extends Component {

  render () {
    return (
      <View className='components-page'>
        <Textarea value="哈哈哈哈哈" />
        <Icon size='60' type='success' />
        <Icon size='60' type='info' />
        <Icon size='60' type='warn' color='#ccc' />
        <Icon size='60' type='warn' />
        <Icon size='60' type='waiting' />
        <Icon size='20' type='success_no_circle' />
        <Icon size='20' type='warn' />
        <Icon size='20' type='success' />
        <Icon size='20' type='download' />
        <Icon size='20' type='clear' color='red' />
        <Icon size='20' type='search' />
      </View>
    )
  }
}
