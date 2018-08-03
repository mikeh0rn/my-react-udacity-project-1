import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import DisplayBook from './DisplayBook'
import BookShelf from './BookShelf'
import BookSearcher from './BookSearcher'
import './App.css'

class BooksApp extends React.Component {
  state = {
    allBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({allBooks: books})
    })
  }

  getBookDetails = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({allBooks: books})
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <DisplayBook books={ this.state.allBooks }
            onChange={ this.getBookDetails }
          />)
        }/>
        <Route exact path="/search" render={ ({ history }) => (
          <BookSearcher onChange={ this.getBookDetails }
            history={ history }
          />)
        }/>
      </div>
    )
  }
}

export default BooksApp;
