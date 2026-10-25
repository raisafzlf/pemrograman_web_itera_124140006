
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function BookForm({ onSubmit, editingBook, onCancel }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Milik");

  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setStatus(editingBook.status);
    } else {
      setTitle("");
      setAuthor("");
      setStatus("Milik");
    }
  }, [editingBook]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !author.trim()) {
      alert("Judul dan penulis wajib diisi!");
      return;
    }

    onSubmit({ title, author, status });
    setTitle("");
    setAuthor("");
    setStatus("Milik");
  }

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <h2>{editingBook ? "Edit Buku" : "Tambah Buku"}</h2>

      <label>Judul Buku</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Masukkan judul buku"
      />

      <label>Nama Penulis</label>
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Masukkan nama penulis"
      />

      <label>Status Buku</label>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Milik">Milik</option>
        <option value="Baca">Sedang Dibaca</option>
        <option value="Beli">Ingin Dibeli</option>
      </select>

      <div className="form-buttons">
        <button type="submit">
          {editingBook ? "Simpan Perubahan" : "Tambah Buku"}
        </button>

        {editingBook && (
          <button type="button" onClick={onCancel}>
            Batal
          </button>
        )}
      </div>
    </form>
  );
}

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  editingBook: PropTypes.object,
  onCancel: PropTypes.func.isRequired,
};

BookForm.defaultProps = {
  editingBook: null,
};

export default BookForm;
