import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class BookSearcher extends Component {
  state = {
    books: [],
    query: ''
  }

  searchAllbooks = (value) => {
    console.log("book val", value);
    if (value.length !== 0) {
      this.filterBooks(value);
    } else {
      console.log("CLEARED!");
      this.clearState()
    }
  }

  //clear state of all attributes for new search
  clearState = () => {
    this.setState({books: [], query: ''})
  }

  // * Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
  // * These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
  filterBooks = (value) => {
    BooksAPI.search(value, 20).then((books) => {
      if (books.length > 0) {
        this.setState(() => {
          return {
            books: books.filter((book) => (book.imageLinks))
          }
        })
      }
    })
  }

  handleChange = (event) => {
    // capture event.target.value bc otherwise it's getting lost!
    var eventValue = event.target.value
    this.setState(() => {
      return {query: eventValue}
    })
    this.searchAllbooks(eventValue)
  }

  addBook = (book, shelf) => {
    this.props.onChange(book, shelf)
    this.props.history.push('/')
  }

  displayBooksGrid = () => {
    return (
     <ol className="books-grid">
      {this.state.query.length > 0 && this.state.books.map((book, index) =>
        (<Book book={ book } key={ index } onUpdate={(shelf) => {
        this.addBook(book, shelf)
      }}/>))}
    </ol>
    )
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={ this.state.query } onChange={ this.handleChange }/>
          </div>
        </div>
        <div className="search-books-results">
          {this.displayBooksGrid()}
        </div>
      </div>
    )
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }
}

export default BookSearcher;
