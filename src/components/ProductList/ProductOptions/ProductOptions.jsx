import {TextField} from '@consta/uikit/TextField';
import {ComboboxStatus} from "./ComboboxStatus";
import {ComboboxZoneType} from "./ComboboxZoneType";


const ProductOptions = ({handleChange,value,setValue}) => {


    return (<div className="product-options" >
        <TextField
            style={{ width: '320px',margin:'0 20px 0 0',textAlign:'left'}}
            onChange={handleChange} value={value}  withClearButton={true}
            placeholder="Наименование" label="Наименование" labelPosition="top"  size="s"/>
        <ComboboxStatus/>
        <ComboboxZoneType/>
    </div>)
}
export {ProductOptions}
