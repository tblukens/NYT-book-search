import React, { Component } from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import SavedBooks from '../components/SavedBooks';

class Saved extends Component {
  state = {
    savedBooks: []
  };

  componentDidMount() {
    this.loadSavedBooks();
  }

  renderSavedBooks = () => {
    return this.state.savedBooks.map(book => (
      <SavedBooks
        _id={book._id}
        key={book._id}
        title={book.title}
        image={book.image}
        authors={book.authors}
        link={book.link}
        description={book.description}
        deleteSavedBook={this.deleteSavedBook}
      />
    ));
  };

  loadSavedBooks = () => {
    API.getSavedBooks()
      .then(res => {
        console.log(res.data);
        this.setState({ savedBooks: res.data });
      })
      .catch(err => console.log(err));
  };

  deleteSavedBook = (id) => {
    API.deleteSavedBook(id)
    .then(res => this.loadSavedBooks())
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="text-center mx-auto">
        <Nav saved={true} />
        <Jumbotron>
          <h1 style={{ fontSize: 80 }}>Saved Books</h1>
          <p style={{ fontSize: 30 }}>Saved books list.</p>
          <p style={{fontSize: 15}}>View saved books and remove.</p>
        </Jumbotron>
        <div className="border border-info text-left m-1 p-3">
          <h2>Saved Books</h2>
          {this.state.savedBooks.length ? (
            this.renderSavedBooks()
          ) : (
            <div className="text-center">
              <h2>No saved books to display.</h2>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Saved;
