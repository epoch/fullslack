import React from 'react'
import PasswordInput from './PasswordInput'
import Slider from './Slider'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <Slider startValue="10" min="0" max="50" />
      <Slider startValue="0" min="0" max="3" />
      <PasswordInput />
    </div>
  }
}