import CompanyItem from "../../components/CompanyItem/CompanyItem";
import RenderPropsProductList from "../../components/MainNavigation/ProductList.jsx/RenderPropsList";
import ProductItem from "../../components/ProductItem/ProductItem"
import {companies, products} from "../../utils/lists"


export default function RenderProps() {
    return (
        <>
            <header>
                <h3> React Render Props </h3>
            </header>
            <section className="col-2">
                <RenderPropsProductList items={products}>
                    {(product) => <ProductItem key={product.productName} product={product}  />}
                </RenderPropsProductList>
                <RenderPropsProductList items={companies}>
                    {(company) => <CompanyItem key={company.companyName} company={company}  />}
                </RenderPropsProductList>
            </section>

        </>
    )
}