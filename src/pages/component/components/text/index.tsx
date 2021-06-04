import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View, Text } from '@tarojs/components'
import { TextProps } from '@tarojs/components/types/Text'
import './index.scss'

/**
 * selectable
 * onClick
 */

interface TestParams {
  testTitle: string;
  testComment: string;
  testConfig: TextProps;
}

const content = '我是一段文本，后面有三个空格，大概这么长 ___ ：   我是一段文本，我是一段文本，我是一段文本，我是一段文本，我是一段文本'

// 通用测试用例
const commonTestCase:Array<TestParams> = [
  {
    testTitle: '无任何参数',
    testComment: '文本默认不可选',
    testConfig: {
    },
  },
  {
    testTitle: 'selectable',
    testComment: '长按复制（ios全部复制，安卓可选择复制）',
    testConfig: {
      selectable: true
    },
  },
  {
    testTitle: 'onClick',
    testComment: '点击文本弹出toast',
    testConfig: {
      onClick: ()=>Taro.showToast({
        title: '你点击了文本诶',
        icon: 'none',
        duration: 2000
      })
    },
  },
]

export default class Index extends Component {

  render () {
    return (
      <ScrollView>
        <View className='test-item'>
          <View className='components-page'>
            {commonTestCase.map((item)=>(
              <View className='test-item' key={item.testComment}>
              <View className="test-block-hd">
                <Text className="test-block-hd__text"> —— {item.testTitle} —— </Text>
              </View>
              <View className="test-block-bd">
                <View className='components-page'>
                <Text style="padding-bottom: 10px">{item.testComment}</Text>
                  <Text {...item.testConfig}>{content}</Text>
                </View>
              </View>
            </View>
            ))}
          </View>
        </View>
      </ScrollView>
    )
  }
}
