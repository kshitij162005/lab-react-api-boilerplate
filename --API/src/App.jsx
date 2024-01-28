import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
 
function App() {
  const [booksData, BookData] = useState([]);
  const [setError] = useState(null);

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", {
      headers: { 'Authorization': 'whatever-you-want' }
    })
    .then(response => {
      BookData(response.data.books);
    })
    .catch(err => {
      setError(err);
      console.error('Error occurred:', err.message)
    });
  }, []); 

  return (
    <div className="App">
      <h1>Book Details</h1>
      {booksData.length > 0 && (
        booksData.map(book => (
          <div key={book.id} className="books-container">
            <h2>Title: {book.title}</h2>
            <img src={book.imageLinks.thumbnail} alt="Book Cover"></img>
            <h4>Description: {book.description}</h4>
            <h5>Authors: {book.authors.join(', ')}</h5>
          </div>
        ))
      )};
    </div>
  );
}

export default App;