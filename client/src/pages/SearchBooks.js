import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult"


class SearchBooks extends Component {
  //create state
  state = {
    search: "",
    books: [],
    message: ""
  };

  //function to take value of what enter in the search bar
  handleInputChange = event => {
    this.setState({ search: event.target.value })
  }

  //function to control the submit button of the search form 
  handleFormSubmit = event => {
    event.preventDefault();
    // once it clicks it connects to the google book api with the search value
    API.getGoogleSearchBooks(this.state.search)
      .then(res => {
          // store response in an array
          let results = res.data.items
          //map through the array 
          results = results.map(result => {
            //store each book information in a new object 
            result = {
              key: result.id,
              id: result.id,
              title: result.volumeInfo.title,
              authors: result.volumeInfo.authors,
              description: result.volumeInfo.description,
              image: result.volumeInfo.imageLinks.thumbnail,
              link: result.volumeInfo.infoLink
            }
            return result;
          })
          // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
          this.setState({ books: results })
        }
      )
      .catch(err => console.log(err));
  }

  handleSavedButton = event => {
    event.preventDefault();
    console.log(this.state.books)
    let savedBooks = this.state.books.filter(book => book.id === event.target.id)
    savedBooks = savedBooks[0];
    API.saveBook(savedBooks)
      .then(this.setState({ message: alert("Your book is saved") }))
      .catch(err => console.log(err))
  }
  render() {
    return (
      <Container fluid>
        <Container>
          <Row>
            <Col size="12">
              <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>
        </Container>
        <br></br>
        <Container>
          <SearchResult books={this.state.books} handleSavedButton={this.handleSavedButton} />
        </Container>
      </Container>
    )
  }


}

export default SearchBooks
