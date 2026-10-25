
import { useState } from "react";
import { useBooks } from "../context/BookContext";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";
import BookFilter from "../components/BookFilter";

function Home() {
  const { books, addBook, updateBook, deleteBook } = useBooks();
  const [editingBook, setEditingBook] = useState(null);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("Semua");

  function handleSubmit(book) {
    if (editingBook) {
      updateBook(editingBook.id, book);
      setEditingBook(null);
    } else {
      addBook(book);
    }
  }

  const filteredBooks = books.filter((book) => {
    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchStatus = status === "Semua" || book.status === status;

    return matchSearch && matchStatus;
  });

  return (
    <main className="container">
      <h1>Manajemen Buku Pribadi</h1>
      <p className="subtitle">Catat dan kelola koleksi bukumu sendiri.</p>

      <BookForm
        onSubmit={handleSubmit}
        editingBook={editingBook}
        onCancel={() => setEditingBook(null)}
      />

      <section className="list-section">
        <h2>Daftar Buku</h2>

        <BookFilter
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
        />

        <BookList
          books={filteredBooks}
          onEdit={setEditingBook}
          onDelete={deleteBook}
        />
      </section>
    </main>
  );
}

export default Home;
