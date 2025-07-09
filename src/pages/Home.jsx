import { useFetch } from "../hooks/useFetch";
import Product from "../Components/ProductList";

function Home() {
  const { data, error, isPending } = useFetch(
    "https://json-api.uz/api/project/products-e/products"
  );
  return (
    <section>
      <div className="container">
        {error && <h2 className="error">{error}</h2>}
        {isPending && <h3 className="loader">Loading...</h3>}
        {data && <Product products={data.data} />}
      </div>
    </section>
  );
}

export default Home;