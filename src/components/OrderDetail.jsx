import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import "./OrderDetail.css";

export default function OrderDetail() {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchOrder() {
            try {
                const db = getFirestore();
                const orderRef = doc(db, "orders", orderId);
                const orderSnap = await getDoc(orderRef);

                if (orderSnap.exists()) {
                    setOrder(orderSnap.data());
                } else {
                    setError("No se encontró la orden.");
                }
            } catch (err) {
                console.error(err);
                setError("Hubo un error al cargar la orden.");
            } finally {
                setLoading(false);
            }
        }

        fetchOrder();
    }, [orderId]);

    if (loading) return <div className="text-center mt-5">Cargando orden...</div>;
    if (error)
        return (
            <div className="text-center mt-5 text-danger">
                <p>{error}</p>
                <Link to="/" className="btn btn-primary mt-3">
                    Volver a la tienda
                </Link>
            </div>
        );

    return (
        <div className="container my-5 order-detail">
            <h2 className="text-center mb-4">Detalle de tu Orden</h2>

            <div className="card shadow p-4">
                <p className="det-txt"><strong>ID de orden:</strong> {orderId}</p>
                <p className="det-txt"><strong>Fecha:</strong> {new Date(order.date.seconds * 1000).toLocaleString()}</p>
                <hr />
                <h5 className="det-txt">Datos del comprador:</h5>
                <p className="det-txt"><strong>Nombre:</strong> {order.buyer.name}</p>
                <p className="det-txt"><strong>Email:</strong> {order.buyer.email}</p>
                <p className="det-txt"><strong>Teléfono:</strong> {order.buyer.phone}</p>
                <hr />
                <h5 className="det-txt">Productos:</h5>
                <ul>
                    {order.cartItems.map((item) => (
                        <li key={item.id}>
                            {item.title} × {item.quantity} — ${item.price * item.quantity}
                        </li>
                    ))}
                </ul>
                <hr />
                <h4 className="text-success">Total: ${order.total.toFixed(2)}</h4>
            </div>

            <div className="text-center mt-4">
                <Link to="/" className="btn btn-primary">
                    Volver a la tienda
                </Link>
            </div>
        </div>
    );
}
