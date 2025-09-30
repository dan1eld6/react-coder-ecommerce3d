import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPrinterById } from "../data/mockAPI";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [printer, setPrinter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getPrinterById(id).then((data) => {
            setPrinter(data);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <h2 className="text-center my-5">Cargando...</h2>;

    if (!printer) return <h2 className="text-center my-5">Producto no encontrado</h2>;

    return <ItemDetail {...printer} />;
};

export default ItemDetailContainer;
