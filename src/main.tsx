import React, { Component } from 'react'
import Styled from 'styled-components'
import JQuery from 'jquery'
interface demo{
  (name:string):string
}
const fn:demo=(name:string)=>name
console.log(fn("111"))
function btn () {
  const Button = Styled.button`
  background:red;
  padding:20px;
  width:20px;
  `
  return <Button/>
}
export default class button extends Component {
  componentDidMount () {
    JQuery('#app').css('background', 'pink')
  }
  render () {
    return btn()
  }
}
