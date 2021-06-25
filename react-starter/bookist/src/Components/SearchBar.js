import React, { Component } from 'react';

class SearchBar extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      userInput: ' ',
    }
  }

  handleChange(val) {
    this.setState({ userInput: val })
  }

  // handleClick()

  render() {
    return (
      <div>
        <input type='text' onChange={ (e) => this.handleChange(e.target.value)} ></input>
        <button>search</button>
        <button>clear search</button>
      </div>
    );
  }
}

export default SearchBar;