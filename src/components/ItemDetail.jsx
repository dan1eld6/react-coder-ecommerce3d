import "./ItemDetail.css";
import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";

const ItemDetail = ({ id, title, description, price, stock, img }) => {
    const { addToCart } = useContext(cartContext);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div id={`carousel-${id}`} className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {img.map((src, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                    <img src={src} className="d-block w-100" alt={`Imagen ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${id}`} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${id}`} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <h4>Precio: ${price}</h4>
                    <button onClick={() => addToCart({ id, title, price,img })}>Agregar al Carrito</button>
                    <p>Stock disponible: {stock}</p>
                </div>
            </div>
        </div>
    );
    
};

export default ItemDetail;

