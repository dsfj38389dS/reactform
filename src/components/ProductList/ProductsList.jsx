import {useDispatch, useSelector} from "react-redux";
import {Product} from "./Product/Product";
import {addProduct, deleteProduct} from "../../store/formSlice";
import {useState, useEffect} from "react";

const ProductsList = () => {
    const products1 = useSelector(state => state.products.products)
    const [products, setProducts] = useState(products1)

    const dispatch = useDispatch();
    const addProductItem = () => {
        dispatch(addProduct())
    }
    const deleteProductItem = ({id}) => {
        dispatch(deleteProduct({id}))
    }
    useEffect(() => {
        setProducts(products1)
        console.log('useEffect')
        console.log(products1)

    }, [products1]);

    const addProductBefore = (idx) => {
        dispatch(addProduct({idx}))
    }
    const addProductAfter = (idx) => {
        idx++;
        dispatch(addProduct({idx}))
    }

    return (
        <div className='productsList'>
            <div className='product product-info'>
                <div className="productItem"></div>
                <div className="productItem wrap-item-align">Вид этапа</div>
                <div className='product-additional-section'>
                    <div className='additional-section_wrap'>
                        <div className="section_wrap-output wrap-item-align">
                            Выходное изделие
                        </div>
                    </div>
                    <div className='additional-section_wrap'>
                        <div className="section_wrap-item wrap-item-align">Артикул</div>
                        <div className="section_wrap-item wrap-item-align">Номенклатура</div>
                        <div className="section_wrap-item wrap-item-align">Характеристика</div>
                        <div className="section_wrap-item wrap-item-align"></div>
                    </div>
                </div>

            </div>
            {products.map((product, idx) => <Product idx={idx} key={product.id} product={product}
                                                     addProductBefore={addProductBefore}
                                                     addProductAfter={addProductAfter} addProductItem={addProductItem}
                                                     deleteProductItem={deleteProductItem}/>)}
        </div>
    )
}
export {ProductsList}