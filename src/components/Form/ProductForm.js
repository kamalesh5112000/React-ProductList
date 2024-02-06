import React,{useReducer,useRef, useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import './ProductFrom.css';

const productIdReducer=(state,action)=>{
    if(action.type==='USER_INPUT'){
        
        return {value:action.value,isValid:action.value.trim()>0}
    }
    if(action.type==='INPUT_BLUR'){
        return {value:state.value,isValid:state.value.trim()>0}
    }
    if(action.type==='NEW_FORM'){
        return {value:'',isValid:null}
    }
    return {value:'',isValid:false}
}

const productNameReducer=(state,action)=>{
    if(action.type==='USER_INPUT'){
        return {value:action.value,isValid:action.value.trim().length>2}
    }
    if(action.type==='INPUT_BLUR'){
        return {value:state.value,isValid:state.value.trim().length>2}
    }
    if(action.type==='NEW_FORM'){
        return {value:'',isValid:null}
    }
    return {value:'',isValid:false}
}

const ProductForm=(props)=>{

    const [enteredCateg, setEnteredCateg]=useState('1');
    const productIdInputRef=useRef();
    const productNameInputRef=useRef();
    const productPriceInputRef=useRef();

    const [productIdState,dispatchProductID]=useReducer(productIdReducer,{value:'',isValid:null})
    const [productNameState,dispatchProductName]=useReducer(productNameReducer,{value:'',isValid:null})
    // const [productPriceState,dispatchProductPrice]=useReducer(productPriceReducer,{value:'',isValid:false})


    const productIdChangeHandler= () =>{
        dispatchProductID({type:'USER_INPUT',value:productIdInputRef.current.value});

    }
    const validateProductIdHandler=()=>{
        dispatchProductID({type:'INPUT_BLUR'})
    }

    const productNameChangeHandler= () =>{
        dispatchProductName({type:'USER_INPUT',value:productNameInputRef.current.value});

    }
    const validateProductNameHandler=()=>{
        dispatchProductName({type:'INPUT_BLUR'})
    }

    const categoryChangeHandler=(e)=>{
        setEnteredCateg(e.target.value)

    }

    const submitHandler=e=>{
        e.preventDefault();
        console.log(productNameState.value)
        props.onAddProduct(productIdState.value,productNameState.value,productPriceInputRef.current.value);
        productIdInputRef.current.value='';
        dispatchProductID({type:'NEW_FORM'})
        productNameInputRef.current.value='';
        dispatchProductName({type:'NEW_FORM'})
        productPriceInputRef.current.value='';
    }




    return(
        <Card>
            <form onSubmit={submitHandler}>
                <div className='productform'>
                    <div className='productform-controls'>
                        <div className='productform-control'>
                            <label>Product ID</label>
                            <input type='number' ref={productIdInputRef} onChange={productIdChangeHandler} className={productIdState.isValid===false? 'invalid' : ''} onBlur={validateProductIdHandler} />
                        </div>
                        <div className='productform-control'>
                            <label>Product Name</label>
                            <input type="text" ref={productNameInputRef} onChange={productNameChangeHandler} className={productNameState.isValid===false? 'invalid' : ''} onBlur={validateProductNameHandler} />
                        </div>
                        <div className='productform-control'>
                            <label>Price</label>
                            <input type="number" ref={productPriceInputRef}/>
                            
                        </div>
                        <div className='productform-control'>
                            <label>Category</label>
                            <select value={enteredCateg} onChange={categoryChangeHandler}> 
                                <option value='1'>Food</option>
                                <option value='2'>Skin Care</option>
                                <option value='3'>Electronics</option>
                                <option value='5'>Toys</option>
                            </select>
                        </div>
                    </div>

                    <Button type='submit' className={'button'}>Add Product</Button>

                </div>
            </form>
        </Card>
    )

}

export default ProductForm;