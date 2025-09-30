import "./ItemDetail.css";
import React, { useEffect, useRef } from "react";

const ItemDetail = ({ id, title, img, description, price, stock }) => {
    const carouselRef = useRef(null);

    // useEffect(() => {
    //     const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
    //     if (carouselRef.current) {
    //         new bootstrap.Carousel(carouselRef.current, {
    //             interval: 3000,
    //             ride: "carousel",
    //         });
    //     }
    // }, []);

    return (
        <div className="container my-5">
            <div className="row align-items-center">
                {/* Carrusel */}
                <div className="col-12 col-md-6">
                    <div ref={carouselRef} id={`carousel-${id}`} className="carousel slide">
                        <div className="carousel-inner">
                            {img.map((src, index) => (
                                <div
                                    key={index}
                                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                                >
                                    <img src={src} className="d-block w-100" alt={`Vista ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Info */}
                <div className="col-12 col-md-6">
                    <h2>{title}</h2>
                    <p className="text">{description}</p>
                    <p className="fw-bold fs-4">💲 {price}</p>
                    <p className="text-secondary">Stock disponible: {stock}</p>

                    <button className="btn btn-dark mt-3">Agregar al carrito 🛒</button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
