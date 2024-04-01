import ProductList from "../../components/MainNavigation/ProductList.jsx/ProductList";
import {products} from "../../utils/lists";
import withToggles from "../components/HOC";
import classes from './HOCPage.module.css'

export default function HOCPage() {
    const ProductListWithToggles = withToggles(ProductList)
  return (
      <div className="col-2">
          <section>
            <h3> This is a ProductList without HOC </h3>
            <div className={classes.listContainer}>
              <ProductList title='Products without a HOC' items={products} />
            </div>
          </section>
          <section>
            <ProductListWithToggles title='Products with  HOC' items={products} />        
          </section>
        
      </div>
  );
}