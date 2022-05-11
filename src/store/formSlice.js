import {createSlice} from "@reduxjs/toolkit";
import {ComboboxZoneType} from "../components/ProductList/ProductOptions/ComboboxZoneType";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [
            {
                id: 3,
                type: 'Литьё r14',
                article: '200',
                nomenclature: 'Lorem ipsum M1300',
                amount: 10
            },
            {
                id: 1,
                type: 'Литьё на Киа',
                article: 'M1300',
                nomenclature: 'Lorem ipsum M1300',
                amount: 10
            },
            {
                id: 2,
                type: 'Литьё',
                article: 'M130',
                nomenclature: 'Lorem ipsum M1300',
                amount: 2
            },
            {
                id: 76,
                type: 'Литьё r15',
                article: 'M1300',
                nomenclature: 'Lorem M1300',
                amount: 5
            }
        ],
        zoneType: [
            {
                id:1,
                label:'Первый'
            },
            {
                id:2,
                label:'Второй'
            },
            {
                id:3,
                label:'Третий'
            },
        ],
        status: [
            {
                label: 'Используется',
                id: 1,
            },
            {
                label: 'Не используется',
                id: 2,
            }
        ]
    },
    reducers: {
        addProduct(state, action) {
            console.log(action.payload.idx)
            state.products.splice( action.payload.idx   , 0, {
                id: Math.floor(Math.random() * 100),
                type: 'text',
                article: 'text',
                nomenclature: 'text',
                amount: 0,
            });
        },
        changeProduct(state, action) {
            const toggledProduct = state.products.find(product => product.id === action.payload.id)
            toggledProduct.type = action.payload.typeValue
            toggledProduct.article = action.payload.articleValue
            toggledProduct.nomenclature = action.payload.nomenclatureValue
            toggledProduct.amount = action.payload.amountValue
            console.log(action.payload)

        },
        deleteProduct(state, action) {
            state.products = state.products.filter(product => product.id !== action.payload.id);
        }
    }

})

export const {addProduct,changeProduct,deleteProduct} = productsSlice.actions
export default productsSlice.reducer