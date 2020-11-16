import React from "react";
import { connect } from "react-redux";
import { bookDetailsActions } from "./../../../../redux-ducks/bookDetails/index";
import "./TableContent.scss";

const TableContent = ({ stateDataToDisplay, setBookUrl }) => {
  return (
    stateDataToDisplay && (
      <table className="charactersTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Culture</th>
            <th>Books</th>
            <th>Series Ammount</th>
          </tr>
        </thead>
        <tbody>
          {stateDataToDisplay.map((character, index) => {
            const aliases = character.aliases;
            const name = character.name;
            let nameToDisplay;

            if (name.length > 0 && aliases.length > 0) {
              nameToDisplay = name + "," + aliases.join(",");
            } else if (name.length < 1 && aliases.length > 0) {
              nameToDisplay = aliases.join(",");
            } else if (name.length > 0 && aliases.length < 0) {
              nameToDisplay = name;
            }

            const books = character.books;
            let booksToDisplay = [];

            books.forEach((book) => {
              const urlLength = book.length;

              if (book[urlLength - 2] === "/") {
                booksToDisplay.push(book[urlLength - 1]);
              } else if (book[urlLength - 3] === "/") {
                booksToDisplay.push(
                  book.slice(book[urlLength - 2], book[urlLength - 1])
                );
              }
            });

            let seriesAmmount;

            if (character.tvSeries[0].length < 1) {
              seriesAmmount = 0;
            } else {
              seriesAmmount = character.tvSeries.length;
            }

            return (
              <tr key={index}>
                <td>{nameToDisplay}</td>
                <td>
                  {character.gender.length > 0 ? character.gender : "Unknown"}
                </td>
                <td>
                  {" "}
                  {character.culture.length > 0 ? character.culture : "Unknown"}
                </td>
                <td>
                  <ul>
                    {booksToDisplay.map((book, index) => {
                      return (
                        <li key={index}>
                          ID:{" "}
                          <a
                            onClick={(event) => {
                              event.preventDefault();
                              setBookUrl(
                                `https://www.anapioficeandfire.com/api/books/${book}`
                              );
                            }}
                            href="#"
                          >
                            {book}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </td>
                <td>{seriesAmmount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  );
};
const mapDispatchToProps = (dispatch) => ({
  setBookUrl: (data) => dispatch(bookDetailsActions.setBookUrl(data)),
});

const mapStateToProps = (state) => ({
  stateDataToDisplay: state.dataToDisplay.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(TableContent);
