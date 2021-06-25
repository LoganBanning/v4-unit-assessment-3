// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Booklist from './Components/Booklist';
import Shelf from './Components/Shelf';
import Data from './data';
import { Component } from 'react';
import SearchBar from './Components/SearchBar';

class App extends Component {
  constructor(prop) {
    super(prop);

    this.state = {
      books: Data,
      shelf: []
    };

    this.addToShelf = this.addToShelf.bind(this);
  }

  addToShelf(bookTitle){
    this.setState({ shelf: [...this.state.shelf, bookTitle] });
  }

  clearShelf() {
    this.setState({ shelf: [] })
  }

  filterBooks(input) {
    let searchedBooks = this.state.books;
    let filteredBooks = [];

    for (let i = 0; i < books.length; i++) {
      if(books[i].includes(input)) {
        filteredBooks.push(searchedBooks[i])
      }
    }

    this.setState({ books: filteredBooks });
  }

  reset()
  
  render() {
  return (
    <div className="App">
      <Header />
      <SearchBar filteredBooks={this.filterBooks} />
      <Booklist myBooks={this.state.books} bookTitle={this.addToShelf} /> 
      <Shelf bookTitle={this.state.shelf} clear={this.clearShelf}/>
    </div>
  );
}
}

export default App;
