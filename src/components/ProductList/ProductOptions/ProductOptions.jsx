import {useState} from "react";
import {TextField} from '@consta/uikit/TextField';
import {IconClose} from "@consta/uikit/IconClose";
import {ComboboxStatus} from "./ComboboxStatus";
import {ComboboxZoneType} from "./ComboboxZoneType";
import { IconCancel } from '@consta/uikit/IconCancel';

const ProductOptions = () => {
    const [value, setValue] = useState(null);
    const handleChange = ({value}: { value: string | null }) => setValue(value);

    return (<div className="product-options" >
        <TextField
            style={{ width: '320px',margin:'0 20px 0 0',textAlign:'left'}}
            onChange={handleChange} value={value} onClick={(rightSide) => setValue('')} rightSide={IconClose}
            placeholder="Наименование" label="Наименование" labelPosition="top"  size="s"/>
        <ComboboxStatus/>
        <ComboboxZoneType/>
    </div>)
}
export {ProductOptions}
