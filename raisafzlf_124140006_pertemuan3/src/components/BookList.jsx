
import PropTypes from "prop-types";

function BookList({ books, onEdit, onDelete }) {
  if (books.length === 0) {
    return <p className="empty">Belum ada buku. Tambahkan buku pertamamu!</p>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <div className="book-card" key={book.id}>
          <div>
            <h3>{book.title}</h3>
            <p>Penulis: {book.author}</p>
            <span className="status">{book.status}</span>
          </div>

          <div className="book-buttons">
            <button onClick={() => onEdit(book)}>Edit</button>
            <button className="delete-btn" onClick={() => onDelete(book.id)}>
              Hapus
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
