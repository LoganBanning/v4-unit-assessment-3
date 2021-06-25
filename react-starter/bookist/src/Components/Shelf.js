import React, { Component } from 'react';

class Shelf extends Component {

  render() {
    let mappedTitles = this.props.bookTitle.map((element, index) => {
      return <div key={index}>{element.title}</div>
    })
    return (
      <div>
        <h1 className='side'>shelf</h1>
        {mappedTitles}
        <button onClick={this.props.clear}>clear shelf</button>
      </div>
    );
  }
}

export default Shelf;