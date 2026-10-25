// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import useBookStats from "../hooks/useBookStats";

describe("useBookStats", () => {
  it("menghitung total buku", () => {
    const books = [
      { id: 1, status: "Milik" },
      { id: 2, status: "Baca" },
    ];

    const { result } = renderHook(() => useBookStats(books));

    expect(result.current.total).toBe(2);
  });

  it("menghitung buku milik", () => {
    const books = [
      { id: 1, status: "Milik" },
      { id: 2, status: "Milik" },
      { id: 3, status: "Baca" },
    ];

    const { result } = renderHook(() => useBookStats(books));

    expect(result.current.owned).toBe(2);
  });

  it("menghitung buku yang sedang dibaca", () => {
    const books = [
      { id: 1, status: "Baca" },
      { id: 2, status: "Milik" },
    ];

    const { result } = renderHook(() => useBookStats(books));

    expect(result.current.reading).toBe(1);
  });

  it("menghitung buku yang ingin dibeli", () => {
    const books = [
      { id: 1, status: "Beli" },
      { id: 2, status: "Beli" },
    ];

    const { result } = renderHook(() => useBookStats(books));

    expect(result.current.wishlist).toBe(2);
  });

  it("menghasilkan nol jika belum ada buku", () => {
    const { result } = renderHook(() => useBookStats([]));

    expect(result.current.total).toBe(0);
    expect(result.current.owned).toBe(0);
    expect(result.current.reading).toBe(0);
    expect(result.current.wishlist).toBe(0);
  });
});
