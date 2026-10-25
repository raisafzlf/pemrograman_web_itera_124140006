
import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useLocalStorage("my-books", []);

  function addBook(book) {
    setBooks([...books, { ...book, id: Date.now() }]);
  }

  function updateBook(id, updatedBook) {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, ...updatedBook } : book
      )
    );
  }

  function deleteBook(id) {
    setBooks(books.filter((book) => book.id !== id));
  }

  return (
    <BookContext.Provider
      value={{ books, addBook, updateBook, deleteBook }}
    >
      {children}
    </BookContext.Provider>
  );
}

export function useBooks() {
  return useContext(BookContext);
}
