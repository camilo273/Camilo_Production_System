

import { useEffect, useRef, useState, useCallback } from 'react';

export function useProductsInfinite({ search = '', linea = '', limit = 50 }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const lastProductRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    setProducts([]);
    setPage(1);
    setHasMore(true);
  }, [search, linea]);

  useEffect(() => {
    setLoading(true);
    fetch(
      `/api/products/paginated?search=${encodeURIComponent(search)}&linea=${encodeURIComponent(
        linea
      )}&page=${page}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts((prev) => [...prev, ...data.data]);
        setHasMore(data.data.length === limit);
        setLoading(false);
      })
      .catch((error) => {
        console.error('❌ Error al cargar productos:', error);
        setLoading(false);
      });
  }, [page, search, linea, limit]);

  return { products, loading, hasMore, lastProductRef };
}