import {Combobox} from "@consta/uikit/Combobox";
import {useState} from "react";
import {useSelector} from "react-redux";

const ComboboxStatus = () => {
    const status = useSelector(state => state.products.status)
    const [value, setValue] = useState();
    return ( <Combobox
        style={{ width: '180px',margin:'0 20px 0 0'}}
        items={status}
        value={value}
        onChange={({ value }) => setValue(value)}
        placeholder="Cтатус"
        label="Cтатус"
        size="s"
    />)
}
export {ComboboxStatus}