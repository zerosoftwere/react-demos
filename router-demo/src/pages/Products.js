import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        <li><Link to="p1">Book</Link></li>
        <li><Link to="p2">Carpet</Link></li>
        <li><Link to="p3">Online Course</Link></li>
      </ul>
    </section>
  );
};

export default Products;
