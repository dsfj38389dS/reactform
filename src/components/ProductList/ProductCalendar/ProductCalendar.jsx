import {DatePicker} from "@consta/uikit/DatePickerCanary";
import {IconCalendar} from "@consta/uikit/IconCalendar";
import {useState} from "react";

const ProductCalendar = () => {
    const [value, setValue] = useState(null);

    return (<div className="product-calendar">
        <DatePicker label="Период действия" labelPosition="top" rightSide={IconCalendar} type="date-range" value={value}
                    onChange={({value}) => setValue(value)} size="s" style={{width: '250px'}}/>
    </div>)
}

export {ProductCalendar}
