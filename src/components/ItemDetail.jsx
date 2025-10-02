// import "./ItemDetail.css";
// import React, { useEffect, useRef } from "react";

// const ItemDetail = ({ id, title, img, description, price, stock }) => {
//     const carouselRef = useRef(null);

//     // useEffect(() => {
//     //     const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
//     //     if (carouselRef.current) {
//     //         new bootstrap.Carousel(carouselRef.current, {
//     //             interval: 3000,
//     //             ride: "carousel",
//     //         });
//     //     }
//     // }, []);

//     return (
//         <div className="container my-5">
//             <div className="row align-items-center">
//                 {/* Carrusel */}
//                 <div className="col-12 col-md-6">
//                     <div ref={carouselRef} id={`carousel-${id}`} className="carousel slide">
//                         <div className="carousel-inner">
//                             {img.map((src, index) => (
//                                 <div
//                                     key={index}
//                                     className={`carousel-item ${index === 0 ? "active" : ""}`}
//                                 >
//                                     <img src={src} className="d-block w-100" alt={`Vista ${index + 1}`} />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Info */}
//                 <div className="col-12 col-md-6">
//                     <h2>{title}</h2>
//                     <p className="text">{description}</p>
//                     <p className="fw-bold fs-4">💲 {price}</p>
//                     <p className="text-secondary">Stock disponible: {stock}</p>

//                     <button className="btn btn-dark mt-3">Agregar al carrito 🛒</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ItemDetail;


import "./ItemDetail.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPrinterById } from "../data/mockAPI";

const ItemDetail = () => {
    const { id } = useParams();
    const [printer, setPrinter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        getPrinterById(id)
            .then((data) => {
                if (!data) {
                    throw new Error("Producto no encontrado");
                }
                setPrinter(data);
            })
            .catch((err) => {
                console.error("Error cargando detalle:", err);
                setError("Hubo un problema al cargar el producto.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) return <h2 className="text-center my-5">Cargando detalle...</h2>;
    if (error) return <h2 className="text-center my-5 text-danger">{error}</h2>;
    if (!printer) return <h2 className="text-center my-5">Producto no encontrado</h2>;

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div id={`carousel-${printer.id}`} className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {printer.img.map((src, index) => (
                                <div
                                    key={index}
                                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                                >
                                    <img
                                        src={src}
                                        className="d-block w-100"
                                        alt={`Imagen ${index + 1}`}
                                        onError={() => setError("Error al cargar una de las imágenes.")}
                                    />
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${printer.id}`} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${printer.id}`} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
                <div className="col-12 col-md-6 .info">
                    <h2>{printer.title}</h2>
                    <p>{printer.description}</p>
                    <h4>Precio: ${printer.price}</h4>
                    <p>Stock disponible: {printer.stock}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
