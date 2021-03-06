import React from 'react'
import { 
  ScrollView, 
  View, 
  Input, 
} from '@tarojs/components'
import './index.scss'


export default class PageInput extends React.Component {
  state = {
    value: ""
  };

  onInput = e => {
    this.setState({
      value: e.detail.value
    });
  };

  render() {
    return (
      <ScrollView className="components-page">
        <View className="components-page__header">
        </View>
        <View className="components-page__body">
          <View className="components-page__body-example example">
            <View className="example-header">可以自动聚焦的input</View>
            <View className="example-body">
              <Input type="text" placeholder={"将会获取焦点"} autoFocus></Input>
            </View>
          </View>
          <View className="components-page__body-example example">
            <View className="example-header">控制最大输入长度的input</View>
            <View className="example-body">
              <Input
                type="text"
                placeholder={"最大输入长度为10"}
                maxlength={10}
                onFocus={(val)=>{console.log('聚焦', val)}}
                onInput={(value)=>{console.log(value); return `${value.target.value}@58.com`;}}
                onBlur={(val)=>{console.log('失焦', val)}}
              />
            </View>
          </View>
          <View className="components-page__body-example example">
            <View className="example-header">
              实时获取输入值:{this.state.value}
            </View>
            <View className="example-body">
              <Input
                type="text"
                placeholder={"输入同步到view中"}
                value={this.state.value}
                onInput={this.onInput}
              ></Input>
            </View>
          </View>
          <View className="components-page__body-example example">
            <View className="example-header">数字输入的input</View>
            <View className="example-body">
              <Input type="number" placeholder={"这是一个数字输入框"}></Input>
            </View>
          </View>
          <View className="components-page__body-example example">
            <View className="example-header">密码输入的input</View>
            <View className="example-body">
              <Input
                type="password"
                password
                placeholder={"这是一个密码输入框"}
              ></Input>
            </View>
          </View>
          <View className="components-page__body-example example">
            <View className="example-header">身份证输入的input</View>
            <View className="example-body">
              <Input type="idcard" placeholder={"身份证输入键盘"}></Input>
            </View>
          </View>
          <View className="components-page__body-example example">
            <View className="example-header">控制占位符颜色的input</View>
            <View className="example-body">
              <Input
                type="text"
                placeholder={"占位符字体是红色的"}
                placeholderTextColor="#ff00ff"
              ></Input>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
