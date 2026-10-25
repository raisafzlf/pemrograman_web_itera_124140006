
import PropTypes from "prop-types";

function BookFilter({ search, setSearch, status, setStatus }) {
  return (
    <div className="book-filter">
      <input
        type="text"
        placeholder="Cari judul atau penulis..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Semua">Semua Status</option>
        <option value="Milik">Milik</option>
        <option value="Baca">Sedang Dibaca</option>
        <option value="Beli">Ingin Dibeli</option>
      </select>
    </div>
  );
}

BookFilter.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired,
};

export default BookFilter;
