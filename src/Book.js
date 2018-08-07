import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class Book extends Component {

  moveToBookshelf = (event) => {
    this.props.onUpdate(event.target.value)
  }

  dropdownMenu = (book) => {
    return (
      <select onChange={ this.moveToBookshelf } value={ book.shelf }>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    )
  }

  render() {
    const book = this.props.book
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128, height: 193,
              backgroundImage: `url("${book.imageLinks.thumbnail}")`
            }}></div>
            <div className="book-shelf-changer">
              {this.dropdownMenu(book)}
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }

  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired
  }
}

export default Book;
