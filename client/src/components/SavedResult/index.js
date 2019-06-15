import React from "react";
import {Row, Col} from "../Grid"

const SavedResult = props => {
    return (props.savedBooks.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Saved Books</h3>
                </div>
            </div>
        </div>
    ):(
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Saved Books</h3>
                    {props.savedBooks.map(savedbook => {
                        return (
                            <li className="saved-list list-group-item">
                                <Row className="SearchResult" id={savedbook.title + "Card"} key={savedbook._id}>
                                    {/* show image of the book */}
                                    <Col size="2" className="bookImage">
                                        <img src={savedbook.image} alt={savedbook.title} />
                                    </Col>
                                    <Col size="1" className="emptyCol"/>
                                    {/* show information of the book */}
                                    <Col size="9" className="bookInfo">
                                        <Row>
                                            <h3 className="bookTitle">{savedbook.title}</h3>
                                        </Row>
                                        <Row>
                                            <h4 className="bookAuthor">{savedbook.authors}</h4>
                                        </Row>
                                        <Row>
                                            <p className="bookDescription">{savedbook.description}</p>
                                        </Row>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="buttonDiv ">
                                    <button className="deleteBook btn btn-primary m-1" id={savedbook._id} onClick={() => props.handleDeleteButton(savedbook._id)}>
                                        Delete Book
                                    </button>
                                    <a href={savedbook.link} target="_blank" rel="noopener noreferrer">
                                        <button className="viewBook btn btn-primary m-1">
                                            View Book
                                        </button>
                                    </a>
                                </Row>
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default SavedResult
