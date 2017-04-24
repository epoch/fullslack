import React from 'react'
import './PasswordInput.css'

export default class PasswordInput extends React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      password: ''
    }
  }

  calcStrength(password) {
    if (password.length < 6) {
      return 'worst'
    } else {
      return 'good'
    }
  }

  handleChange(event) {
    this.setState({ password: event.target.value })
  }

  render() {
    const strength = this.calcStrength(this.state.password)
    return <div>
      <input type="password" 
        onChange={this.handleChange} />
      <span className={strength}>strength: {strength}</span>
    </div>
  }
}