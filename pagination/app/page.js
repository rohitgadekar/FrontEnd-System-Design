"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    if (data && data.products.length > 0) setProducts(data.products);
  };

  useEffect(()=>{
    fetchProducts();
  },[])

  const setPageHandler = (selectedPage)=> {
    if(selectedPage >= 1 && selectedPage <= products.length/10 && selectedPage !== page) {
      setPage(selectedPage);
    }
  }

  return (
    <div className="grid gap-5 p-12 items-center justify-items-center  font-[family-name:var(--font-geist-sans)]">
      {products.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.slice(page * 10 - 10, page * 10).map((item, _) => {
            return (
              <span
                key={item.title}
                className="bg-gray-600 text-center rounded-lg pb-2 text-white"
              >
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
                <p>$ {item.price}</p>
              </span>
            );
          })}
        </div>
      )}

      {products.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <span
            onClick={() => {
              setPageHandler(page - 1);
            }}
            className="cursor-pointer hover:bg-gray-700 rounded-xl p-2"
          >
            {"< Previous"}
          </span>
          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <span
                onClick={() => {
                  setPageHandler(i + 1);
                }}
                className={`cursor-pointer hover:bg-gray-700 rounded-md p-2 ${page == i+1 ? 'bg-gray-700 text-white' : ''}`}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            onClick={() => {
              setPageHandler(page + 1);
            }}
            className="cursor-pointer hover:bg-gray-700 rounded-xl p-2"
          >
            {"Next >"}
          </span>
        </div>
      )}
    </div>
  );
}
