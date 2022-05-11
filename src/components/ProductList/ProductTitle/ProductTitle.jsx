import {TextField} from "@consta/uikit/TextField";
import {IconClose} from "@consta/uikit/IconClose";
import {useState} from "react";

const ProductTitle = () => {
    const [value, setValue] = useState(null);
    const handleChange = ({value}: { value: string | null }) => setValue(value);
    return (
        <div className="product-title">
            <div>М1300 Таз Хозяюшка 15л(уп.10шт) (Красный)</div>
            <TextField
                style={{width: '220px', margin: '0 180px 0 0', textAlign: 'left'}}
                onChange={handleChange} value={value} onClick={(rightSide) => setValue('')} rightSide={IconClose}
                placeholder="Поиск" size="s"/>

        </div>
    )
}
export {ProductTitle}