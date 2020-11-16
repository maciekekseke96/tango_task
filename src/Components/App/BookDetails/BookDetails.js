import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bookDetailsActions } from "./../../../redux-ducks/bookDetails/index";
import "./BookDetails.scss";

const BookDetails = ({ bookUrl, bookDetails, setBookDetails, setBookUrl }) => {
  useEffect(() => {
    fetch(bookUrl)
      .then((resp) => resp.json())
      .then((data) => {
        setBookDetails(data);
      });
  }, [bookUrl]);

  const formatDate = (date) => {

    let myDate = new Date(date);
    const day = myDate.getDay() + 1;
    const month = myDate.getMonth() + 1;
    const year = myDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  };
  return (
    <div className="bookDetails">
      <h1>Book Details</h1>
      <table className="bookDetailsTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>ISBN</th>
            <th>Number of pages</th>
            <th>Released date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{bookDetails.name}</td>
            <td>{bookDetails.isbn}</td>
            <td>{bookDetails.numberOfPages}</td>
            <td>{formatDate(bookDetails.released)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setBookDetails: (data) => dispatch(bookDetailsActions.setBookDetails(data)),
  setBookUrl: (data) => dispatch(bookDetailsActions.setBookUrl(data)),
});

const mapStateToProps = (state) => ({
  bookUrl: state.bookDetails.url,
  bookDetails: state.bookDetails.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
