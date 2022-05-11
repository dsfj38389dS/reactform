import {TextField} from "@consta/uikit/TextField";
import {useState} from "react";
import { Button } from '@consta/uikit/Button';
import { IconSearch } from '@consta/uikit/IconSearch';

const ProductTitle = ({productName}) => {
    const [value, setValue] = useState(null);
    const handleChange = ({value}: { value: string | null }) => setValue(value);
    return (
        <div className="product-title">
            <div>{productName}</div>
            <div className='product-search'>
                <TextField
                    form="roundClear"
                    style={{width: '220px', margin: '0 0 0 0', textAlign: 'left'}}
                    onChange={handleChange} value={value} withClearButton={true}
                    placeholder="Поиск" size="s"/>
                <Button
                    style={{borderLeft:'none'}}
                    className='product-search-btn'
                    form="brickRound"  size="s" view="secondary" iconRight={IconSearch} onlyIcon />
            </div>
        </div>
    )
}
export {ProductTitle}