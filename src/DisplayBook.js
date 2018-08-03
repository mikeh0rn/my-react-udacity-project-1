import React, {Component} from 'react'
import BookShelf from './BookShelf'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

class DisplayBook extends Component {

  filterBookShelf = (books) => {
    return (
      <div>
        <BookShelf books={books.filter((book) =>
          (book.shelf === "currentlyReading"))}
          title="Currently Reading"
          onChangeShelf={this.props.onChange}
        />
        <BookShelf books={books.filter((book) =>
          (book.shelf === "read"))}
          title="Read"
          onChangeShelf={this.props.onChange}
        />
        <BookShelf books={books.filter((book) =>
          (book.shelf === "wantToRead"))}
          title="Want to Read"
          onChangeShelf={this.props.onChange} />
      </div>
    )
  }

  render() {
    const books = this.props.books
    // console.log("what are the books here: ", books)
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MIKE'S READS!</h1>
        </div>
        <div className="list-books-content">
          { this.filterBookShelf(books) }
        </div>
        <div className="open-search">
          <Link to='/search'></Link>
        </div>
      </div>
    )
  }

  static propTypes = {
    books: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }
}

export default DisplayBook;
