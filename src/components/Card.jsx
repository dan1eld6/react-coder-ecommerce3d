import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ id, title, img, price }) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="impresora card p-3">
                <p className="p-impresora">{title}</p>

                <div
                    id={`carousel-${id}`}
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="3000"
                >
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

                <p className="fw-bold precio">💲 {price}</p>

                <Link to={`/impresora/${id}`} className="btn btn-dark mt-2">
                    Ver detalle
                </Link>
            </div>
        </div>
    );
};

export default Card;
