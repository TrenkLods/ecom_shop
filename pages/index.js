
import { Product, FooterBanner, HeroBanner } from "../component";
import { client } from "../lib/client";



const Home = ({ products, bannerData }) => {

  
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[1]} />
      <div className="products-heading">
        <h2>best selling Products</h2>
        <p>Speakers of many Variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      footer
    </>
  );
};
export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);

  const bannerQuery = `*[_type == "banner"]`;
  const bannerData = await client.fetch(bannerQuery);

  return { props: { products, bannerData } };
};
export default Home;
