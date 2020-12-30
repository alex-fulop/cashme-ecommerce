import React from 'react'
import Rating from '../components/Rating';
import data from '../data'
import { Link } from "react-router-dom";

export default function ProductScreen(props) {
    const product = data.products.find(product => product._id === props.match.params.id)
    if (!product) {
        return <div><h1>Product Not Found</h1></div>;
    }
    return (
        <div className="container">
            <Link to="/">Back to Home</Link>
            <div className="row row-compact top">
                <div className="col-1">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-2">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li><Rating rating={product.rating} numReviews={product.numReviews}></Rating></li>
                        <li>Description: {product.description}</li>
                        <li>Price: {product.price}$</li>
                        <li>
                            Status: {product.countInStock > 0 ?
                                <span class="success">In Stock</span> :
                                <span class="failure">Unavailable</span>}
                        </li>
                        <li>
                            <button className="primary block">Add to Cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
