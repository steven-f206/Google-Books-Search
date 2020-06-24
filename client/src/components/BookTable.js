import React, { useContext } from 'react';
import { AppContext } from '../utils/AppContext';

const BookTable = () => {

  // Grab Search data to filter against
  const { bookData, fetchData } = useContext(AppContext);
  let [fetching/*, setFetching*/] = fetchData;

  const API = {
    async saveBooks(id) {

      let idInfo = bookData[0].items.filter(data => data.id === id);

      let idInfopass = {
        id: idInfo[0].id,
        title: idInfo[0].volumeInfo.title,
        description: idInfo[0].volumeInfo.description,
        authors: idInfo[0].volumeInfo.authors,
        imgUrl: idInfo[0].volumeInfo.imageLinks.thumbnail,
        linkUrl: idInfo[0].volumeInfo.infoLink,
      }

      // console.log(idInfopass);

      const res = await fetch("/api/saveBooks", {
        method: "POST",
        body: JSON.stringify(idInfopass),
        headers: { "Content-Type": "applicatioon/json" }
      });

      // eslint-disable-next-line
      const json = await res;
      // console.log(json);
    }
  }

  return (
    <section id="searchedBooks">
      {fetching === false ?
        ''
        : (
          <React.Fragment>
            {bookData[0].items.map((book) => (
              <div className="book" key={book.id}>
                <h3>{book.volumeInfo.title}</h3>
                <h4>Written By: {
                  (book.volumeInfo.authors) ?
                    book.volumeInfo.authors.map((author) => ` ${author}`).toString() :
                    " Not Provided"
                }</h4>
                <div className="book-info">
                  <div className="book-buttons">
                    <button onClick={(e) => {
                      e.preventDefault();
                      window.open(book.volumeInfo.infoLink);
                    }}>View
                  </button>
                    <button data-id={book.id} onClick={(e) => API.saveBooks(e.target.getAttribute("data-id"))}>Save</button>
                  </div>
                  <div>{(book.volumeInfo.imageLinks ?
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt="book.volumeInfo.title" />
                    : <img src="./content/img/not-found.jpg" alt="Not Found" width="150" />)}</div>
                  <div>{(book.volumeInfo.description ? <p>{book.volumeInfo.description}</p> : <p>No description has been provided for this book.</p>)}</div>

                </div>
              </div>
            ))}
          </React.Fragment>
        )}
    </section>
  )
};

export default BookTable