import React, { Component } from 'react';
import Data from '../data';



class Booklist extends Component {

  render() {
    const mappedBooks = this.props.myBooks.map((element, index) => {
      return <div key={index}>
        <img src={element.img} onClick={this.addToShelf} />
      <div>
        {element.title}
        {element.author}
      </div>
      </div>
    });
    return (
      <div>
        <h1 className='side'>list</h1>
        {mappedBooks}
      </div>
    );
  }
}

export default Booklist;