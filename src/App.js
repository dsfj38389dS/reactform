import './App.css';
import {ProductsList} from "./components/ProductList/ProductsList";
import {Theme, presetGpnDefault} from '@consta/uikit/Theme';
import {ProductCalendar} from "./components/ProductList/ProductCalendar/ProductCalendar";
import {ProductOptions} from "./components/ProductList/ProductOptions/ProductOptions";
import {ProductTitle} from "./components/ProductList/ProductTitle/ProductTitle";

function App() {


    return (
        <Theme preset={presetGpnDefault}>
            <div className="App">
                <div className="form-wrap">
                    <ProductTitle />
                    <ProductCalendar />
                    <ProductOptions />
                    <ProductsList/>
                </div>
            </div>
        </Theme>
    );
}

export default App;
