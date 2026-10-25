
import { useBooks } from "../context/BookContext";
import useBookStats from "../hooks/useBookStats";

function Stats() {
  const { books } = useBooks();
  const stats = useBookStats(books);

  return (
    <main className="container">
      <h1>Statistik Buku</h1>
      <p className="subtitle">Lihat ringkasan koleksi bukumu.</p>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Buku</h3>
          <p>{stats.total}</p>
        </div>

        <div className="stat-card">
          <h3>Buku Milik</h3>
          <p>{stats.owned}</p>
        </div>

        <div className="stat-card">
          <h3>Sedang Dibaca</h3>
          <p>{stats.reading}</p>
        </div>

        <div className="stat-card">
          <h3>Ingin Dibeli</h3>
          <p>{stats.wishlist}</p>
        </div>
      </div>

      <h2>Semua Buku ({books.length})</h2>

      {books.length === 0 ? (
        <p>Belum ada data buku.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {book.title} — {book.author} ({book.status})
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Stats;
