import { TextField } from '@consta/uikit/TextField';
import {useState} from "react";
import { IconClose } from '@consta/uikit/IconClose';

const Test1 = () => {
    const [value, setValue] = useState(null);
    const handleChange = ({ value }: { value: string | null }) => setValue(value);
    return (<div>
        <TextField
            onChange={handleChange}
            value={value}
            rightSide={IconClose}
            onClick={(rightSide)=>setValue('S')}
        />
    </div>)
}
export {Test1}