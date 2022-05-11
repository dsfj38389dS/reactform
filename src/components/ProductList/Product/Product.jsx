import s from './Product.module.css';
import {useState, useRef} from "react";
import {ContextMenu} from '@consta/uikit/ContextMenuCanary';
import {changeProduct} from "../../../store/formSlice";
import {useDispatch} from "react-redux";
import {IconEdit} from '@consta/uikit/IconEdit';
import {IconAdd} from '@consta/uikit/IconAdd';
import {IconTrash} from '@consta/uikit/IconTrash';
import {IconKebab} from "@consta/uikit/IconKebab";
import {Button} from '@consta/uikit/Button';
import { TextField } from '@consta/uikit/TextField';

const Product = ({product, addProductBefore, addProductAfter, addProductItem, deleteProductItem, idx}) => {

    const {id, type, article, nomenclature, amount} = product;

    const [typeValue, setTypeValue] = useState(type)
    const [articleValue, setArticleValue] = useState(article)
    const [nomenclatureValue, setNomenclatureValue] = useState(nomenclature)
    const [amountValue, setAmountValue] = useState(amount)

    const handleChangeType = ({ value }: { value: string | null }) => setTypeValue(value);
    const handleChangeArticle = ({ value }: { value: string | null }) => setArticleValue(value);
    const handleChangeNomenclature = ({ value }: { value: string | null }) => setNomenclatureValue(value);
    const handleChangeAmount = ({ value }: { value: string | null }) => setAmountValue(value);

    const dispatch = useDispatch();
    const changeTypeItem = () => {
        dispatch(changeProduct({id, typeValue, articleValue, nomenclatureValue, amountValue}))
        setEdit(!edit)
    }

    const [edit, setEdit] = useState(false)

    const items: Item[] = [
        {
            label: 'Добавить строку выше',
            imageLeft: IconAdd,
            onClick: () => {
                addProductBefore(idx)
            }
        },
        {
            label: 'Добавить строку ниже',
            imageLeft: IconAdd,
            onClick: () => {
                addProductAfter(idx)
            }
        },
        {
            label: edit ? 'Сохранить' : 'Редактировать',
            imageLeft: IconEdit,
            // onClick: () => {
            //     setEdit(!edit);
            // }
            onClick: () => {
                edit ? changeTypeItem() : setEdit(!edit);
            },


        },
        {
            label: 'Удалить',
            imageLeft: IconTrash,
            onClick: () => {
                deleteProductItem({id})
            }

        },
    ];
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);


    return (
        <div className="product product-hover">
            <div className="productItem">{id}</div>
            <div className="productItem">
                {edit ? <TextField
                        onChange={handleChangeType}
                        value={typeValue}
                        type="textarea"
                        cols={200}
                        placeholder="placeholder"
                    /> :
                    <div>{typeValue}</div>
                }
            </div>
            <div className="productItem">
                {edit ? <TextField
                        onChange={handleChangeArticle}
                        value={articleValue}
                        type="textarea"
                        cols={200}
                        placeholder="placeholder"
                    />  :
                    <div>{articleValue}</div>
                }
            </div>
            <div className="productItem">
                {edit ? <TextField
                        onChange={handleChangeNomenclature}
                        value={nomenclatureValue}
                        type="textarea"
                        cols={200}
                        placeholder="placeholder"
                    /> :
                    <div>{nomenclatureValue}</div>
                }
            </div>
            <div className="productItem">
                {edit ? <TextField
                        onChange={handleChangeAmount}
                        value={amountValue}
                        type="textarea"
                        cols={200}
                        placeholder="placeholder"
                    /> :
                    <div>уп {amountValue} шт
                    </div>
                }
            </div>
            <div className="productItem">
                <Button className="ContextMenu-hover" style={{background: 'none', color: 'black'}} iconLeft={IconKebab} ref={ref}
                        onClick={() => setIsOpen(!isOpen)}/>
                {isOpen && (
                    <ContextMenu

                        isOpen={isOpen}
                        items={items}
                        anchorRef={ref}
                        direction="downStartLeft"
                        getItemLeftIcon={(item) => item.imageLeft}
                        onClick={() => setIsOpen(false)}
                        onClickOutside={() => setIsOpen(false)}
                        size="s"
                    />
                )}
            </div>
        </div>

    )
}
export {Product}