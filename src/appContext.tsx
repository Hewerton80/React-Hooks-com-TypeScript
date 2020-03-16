import React,{useContext} from 'react';
import CartContext from "./CartContext";

const AppContext:React.FC =  ()=> {
    const {products,shiping_value} = useContext(CartContext);
    return (
        <ul>
            {products?.map(p=>
                <li>{p.name}</li>
            )}
        </ul>
    );
}
export default AppContext;