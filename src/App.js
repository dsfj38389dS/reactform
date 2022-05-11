import './App.css';
import {ProductsList} from "./components/ProductList/ProductsList";
import {ProductCalendar} from "./components/ProductList/ProductCalendar/ProductCalendar";
import {ProductOptions} from "./components/ProductList/ProductOptions/ProductOptions";
import {ProductTitle} from "./components/ProductList/ProductTitle/ProductTitle";
import {useState} from "react";
import {Test1} from "./components/ProductList/test";

function App() {
    const [value, setValue] = useState("Lorem");
    const handleChange = ({value}: { value: string | null }) => setValue(value);

    return (

            <div className="App">
                <div className="form-wrap">
                    <ProductTitle productName={value}/>
                    <ProductCalendar />
                    <ProductOptions handleChange={handleChange} value={value} setValue={setValue}/>
                    <ProductsList/>
                </div>
            </div>

    );
}

export default App;
