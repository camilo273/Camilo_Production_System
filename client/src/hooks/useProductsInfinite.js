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
    fetch('/api/products/paginated', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ search, linea, page, limit })
    })
      .then(async (res) => {
        const contentType = res.headers.get('content-type');
        if (!res.ok || !contentType || !contentType.includes('application/json')) {
          const text = await res.text();
          throw new Error(`Respuesta inesperada del servidor: ${text}`);
        }
        return res.json();
      })
      .then((data) => {
        const productos = Array.isArray(data) ? data : data.data;
        setProducts((prev) => [...prev, ...productos]);
        setHasMore(productos?.length === limit);
        setLoading(false);
      })
      .catch((error) => {
        console.error('❌ Error al cargar productos:', error);
        setLoading(false);
      });
  }, [page, search, linea, limit]);

  return { products, loading, hasMore, lastProductRef };
}