
import { useMemo } from "react";

function useBookStats(books) {
  return useMemo(() => {
    return {
      total: books.length,
      owned: books.filter((book) => book.status === "Milik").length,
      reading: books.filter((book) => book.status === "Baca").length,
      wishlist: books.filter((book) => book.status === "Beli").length,
    };
  }, [books]);
}

export default useBookStats;
