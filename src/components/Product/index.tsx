import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../services/product";

interface ProductInterface {
  // Define your interface properties here
}

const Product: React.FC<ProductInterface> = () => {
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const response: any = await getAllProducts();
      setProducts([...response.products]); // Access `products` directly
      //   console.log("response", response);
    })();
  }, []);

  return (
    <main>
      <section>
        {products?.map((item: any) => {
          return (
            <div>
              <h6>{item.name}</h6>
              <img src={item.images.thumbnail} alt={item?.name} />
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Product;
