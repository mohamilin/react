import React from 'react';

class UpperCase extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            word: ''
        }
    }
  handleSubmit = (event) => {
    event.preventDefault()
    const data = this.state
    console.log('final', data)
  }

  handleInputChange = (event) => {
    event.preventDefault()
    // console.log(event)
    // console.log(event.target.name)
    // console.log(event.target.value)
    this.setState({
        [event.target.name]: event.target.value
    })

  }

  componentDidMount() {
      this.setState({
          word: ""
      })
  }

    render() {
        const {word} = this.state
        return(
            <div>
                <h1>Input Text</h1>
                <p>New Word : {word.toUpperCase()}</p>
                <form onChange={this.handleSubmit}>
                    <p> <input type="text" name="word" placeholder="Masukkan Kata / Kalimat" value={word} onChange={this.handleInputChange} ></input></p>
                    <button>to change</button>
                </form>
            </div>
        )
    }
}

export default UpperCase;