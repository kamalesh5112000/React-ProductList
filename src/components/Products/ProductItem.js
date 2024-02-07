import Card from "../UI/Card"
import './ProductItem.css';

const ProductItem=(props)=>{

    const onDeleteHandler=()=>{
        props.onDeleteProduct(props.id)
    }
    return (
        <div className="product-item">
            <Card>
                <div className="product-info">
                    <span>Name: {props.name}</span>
                    <span>Price: {props.price}</span>
                    <span>Category: {props.category}</span>
                    <button className="delete-button" onClick={onDeleteHandler}>Delete</button>
                </div>
            </Card>
        </div>
    );

}

export default ProductItem;