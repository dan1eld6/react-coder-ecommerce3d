import { useContext, useState } from "react";
import { cartContext } from "../context/cartContext";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";
import { createOrder } from "../data/firebase";
import FormCheckout from "../components/FormCheckout";

export default function Cart() {
    const {
        cartItems,
        removeItem,
        cartTotalPrice,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
    } = useContext(cartContext);

    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();

    async function handleCheckout(buyerData) {
        try {
            const total = cartTotalPrice();
            const date = new Date();

            const orderId = await createOrder({
                buyer: buyerData,
                cartItems,
                total,
                date,
            });

            clearCart();
            navigate(`/order/${orderId}`);
        } catch (error) {
            console.error("Error al crear la orden:", error);
            alert("Hubo un error al procesar la compra.");
        }
    }

    if (cartItems.length === 0) {
        return (
            <div className="container text-center my-5">
                <h2>Tu carrito está vacío</h2>
                <Link to="/" className="btn btn-primary mt-3">
                    Volver a la tienda
                </Link>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Carrito de Compras</h2>

            <div className="cart-list">
                {cartItems.map((item) => (
                    <div className="card mb-3 shadow-sm cart-item" key={item.id}>
                        <div className="row g-0 align-items-center item-card">
                            <div className="col-12 col-md-3 text-center">
                                <img
                                    src={item.img[0]}
                                    alt={item.title}
                                    className="img-fluid rounded cart-item-img"
                                />
                            </div>

                            <div className="col-12 col-md-6 cart-item-details">
                                <h5 className="mb-2">{item.title}</h5>
                                <p className="mb-1 det-info">Precio unitario: ${item.price}</p>

                                <div className="cantidad-container mb-2">
                                    <span>Cantidad:</span>
                                    <button
                                        className="btn btn-sm btn-outline-secondary mx-2"
                                        onClick={() => decreaseQuantity(item.id)}
                                    >
                                        −
                                    </button>
                                    <span className="cantidad">{item.quantity}</span>
                                    <button
                                        className="btn btn-sm btn-outline-secondary mx-2"
                                        onClick={() => increaseQuantity(item.id)}
                                    >
                                        +
                                    </button>
                                </div>

                                <p className="fw-bold text-success price-total">
                                    Total: ${(item.quantity * item.price).toFixed(2)}
                                </p>
                            </div>

                            <div className="col-12 col-md-3 mt-md-0 eliminar-btn">
                                <button
                                    className="btn btn-outline-danger btn-sm"
                                    onClick={() => removeItem(item.id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart-summary text-center mt-4">
                <h4>Total de la compra: ${cartTotalPrice().toFixed(2)}</h4>

                <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-3">
                    <button className="btn btn-outline-secondary" onClick={clearCart}>
                        Vaciar Carrito
                    </button>

                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="btn btn-primary"
                    >
                        {showForm ? "Cancelar" : "Confirmar compra"}
                    </button>
                </div>

                {showForm && (
                    <div className="mt-4">
                        <FormCheckout onSubmit={handleCheckout} />
                    </div>
                )}
            </div>
        </div>
    );
}
