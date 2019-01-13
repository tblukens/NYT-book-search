import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import { Input, FormBtn } from "../components/Form/index";
import GoogleBooks from "../components/GoogleBooks";

class Search extends Component {
  state = {
    googleBooks: [],
    title: ""
  };

  renderGoogleBooks = () => {
    return this.state.googleBooks.map(book => (
      <GoogleBooks
        key={book.id}
        title={book.volumeInfo.title}
        image={book.volumeInfo.imageLinks.thumbnail}
        link={book.volumeInfo.infoLink}
        description={book.volumeInfo.description}
        authors={book.volumeInfo.authors}
        saveGoogleBook={this.saveGoogleBook}
      />
    ));
  };

  saveGoogleBook = book => {
    API.saveBook(book)
      .then(res => console.log("saved"))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      API.searchGoogleBooks({
        title: this.state.title
      })
        .then(res => {
          console.log(res.data.items);
          this.setState({ googleBooks: res.data.items });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="text-center mx-auto">
        <Nav home={true} />
        <Jumbotron>
          <h1 style={{ fontSize: 80 }}>Google Book Search</h1>
          <p style={{ fontSize: 30 }}>Search for books and save them.</p>
        </Jumbotron>
        <div className="row border border-info m-1 p-2">
          <div className="col text-left">
            <h1>Book Search</h1>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title"
              />
              <FormBtn
                disabled={!this.state.title}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </div>
        </div>
        <div className="border border-info text-left m-1 p-3">
          <h2>Results</h2>
          {this.state.googleBooks.length ? (
            this.renderGoogleBooks()
          ) : (
            <div className="text-center">
              <h2>No books to display.</h2>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
