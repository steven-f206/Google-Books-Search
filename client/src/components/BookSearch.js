import React, { useContext } from 'react';
import { AppContext } from '../utils/AppContext';

const BookSearch = () => {

  const { search, bookData, fetchData, modalCopy } = useContext(AppContext);
  // eslint-disable-next-line
  let [books, setBooks] = bookData;
  let [fetching, setFetching] = fetchData;
  let [searching, setSearching] = search;
  let [modalcopyState, setModalCopyState] = modalCopy;

  const handleChange = e => {
    setSearching(searching = e.target.value);
  };

  const API = {

    async booksCall() {
      if (searching === '') {

      } else {
        const res = await fetch("/api/books", {
          method: "POST",
          body: JSON.stringify({ searching }),
          headers: { "Content-Type": "application/json" }
        });

        const json = await res.json();
        setBooks(books = json);
        if (fetching === false) {
          setFetching(fetching = true)
        }
      }
    }
  }

  let handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      API.booksCall();
    }
  }

  return (
    <React.Fragment>
      <header>
        <h1>Google Books Search</h1>
      </header>

      <section className="filterBar">
        <input
          type="text"
          placeholder="Filter by book name..."
          value={searching}
          onChange={handleChange}
          onKeyPress={(e) => handleKeyPress(e)}
        />
        <button onClick={() => API.booksCall()}>Search</button>
      </section>
    </React.Fragment>
  );
}

export default BookSearch