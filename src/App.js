import React from 'react'

class App extends React.Component {

  state = {
    people: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(data => {
      this.setState({people: data.people})
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>{this.state.people.length} in space</p>
      </div>
    )
  }
}


export default App
