import PropTypes from "prop-types";
import ProductItem from "../../ProductItem/ProductItem";
export default function ProductList({ items }) {
    return (
        <ul className="list">
          {items.map((product) => (
            <ProductItem key={product.productName} product={product} />
          ))}
        </ul>
    );
  }

  ProductList.propTypes = {
    items: PropTypes.array
  }