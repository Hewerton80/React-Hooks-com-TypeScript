import {createContext} from 'react'

interface Product {
    id: number;
    name: string;
    price: number;
}
interface Cart {
    products?: Product[];//ou Array<Product>
    shiping_value?: number;//opcional
    
}

const Cartcontext = createContext<Cart>({
    products: [],
    shiping_value:0
});
export default Cartcontext;