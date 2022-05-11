import {Combobox} from "@consta/uikit/Combobox";
import {useState} from "react";
import {useSelector} from "react-redux";

const ComboboxZoneType = () => {
    const zoneType = useSelector(state => state.products.zoneType)
    const [value, setValue] = useState();
    // const items: Item[] = [
    //     {
    //         label: 'Первый',
    //         id: 1,
    //     },
    //     {
    //         label: 'Второй',
    //         id: 2,
    //     },
    //     {
    //         label: 'Третий',
    //         id: 3,
    //     },
    // ];
  return (
      <Combobox
          style={{ width: '200px'}}
          items={zoneType}
          value={value}
          onChange={({ value }) => setValue(value)}
          placeholder="Тип зоны"
          label="Тип зоны"
          size="s"
      />
  )
}
export {ComboboxZoneType}