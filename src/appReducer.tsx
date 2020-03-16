import React,{useReducer} from 'react';


interface Cart {
    products: string[];//ou Array<string>
    shiping_value?: number;//opcional
    
}
type CartAction  = {
    type:"ADD_PRODUCT" | "REMOVE_PRODUCT"
} 

const AppContext:React.FC =  ()=> {
    const reducer = (state:Cart, action:CartAction)=>{
        switch(action.type){
            case "ADD_PRODUCT":
                return {
                    ...state,
                    products: [...state.products,"Novo produto"]
                }
            default :
                return state;
        }
    }
    
    const initializerArg = {
        products:[],
        shiping_value:0
    }

    const cart= useReducer(reducer,initializerArg);
    return (
        <div/>
        // <ul>
        //     {products?.map(p=>
        //         <li>{p.name}</li>
        //     )}
        // </ul>
    );
}
export default AppContext;