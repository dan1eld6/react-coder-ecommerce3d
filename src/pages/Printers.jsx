import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Printers.css";
import Card from "../components/Card";
import { getPrinters, getPrintersByCategory } from "../data/mockAPI";


const Printers = () => {
    const { categoryId } = useParams();
    const [printers, setPrinters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {
        setLoading(true);
        setError("");

        const fetchData = categoryId ? getPrintersByCategory(categoryId) : getPrinters();

        fetchData
            .then((data) => {
                setPrinters(data);
            })
            .catch((err) => {
                console.error("Error cargando impresoras:", err);
                setError("Hubo un problema al cargar las impresoras.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    if (loading) return <h2 className="text-center my-5">Cargando...</h2>;
    if (error) return <h2 className="text-center my-5 text-danger">{error}</h2>;
    if (printers.length === 0) return <h2 className="text-center my-5">No hay productos en esta categoría</h2>;


    return (
        <div className="container my-5">
            {/*  Filtros de categorías */}
            <div className="mb-4 d-flex gap-2 justify-content-center">
                <Link to="/impresoras" className="btn btn-outline-light">
                    Todas
                </Link>
                <Link to="/impresoras/FDM" className="btn btn-outline-light">
                    FDM
                </Link>
                <Link to="/impresoras/Multicolor" className="btn btn-outline-light">
                    Multicolor
                </Link>
                <Link to="/impresoras/Industrial" className="btn btn-outline-light">
                    Industrial
                </Link>
            </div>

            <div className="row">
                <div className="row">
                    {printers.map((printer) => (
                        <Card key={printer.id} {...printer} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Printers;
