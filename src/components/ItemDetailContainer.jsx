import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPrintersById } from "../data/firebase";
import ItemDetail from "./ItemDetail";
import { useContext } from "react"
import {cartContext} from "../context/cartContext"

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [printer, setPrinter] = useState(null);
    const [loading, setLoading] = useState(true);
    // const {addToCart} = useContext(cartContext)

    useEffect(() => {
        setLoading(true);
        getPrintersById(id)
            .then((data) => {
                setPrinter(data);
            })
            .catch((err) => {
                console.error(err);
                setPrinter(null)
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id])

    if (loading) return <h2 className="text-center my-5">Cargando...</h2>;

    if (!printer) return <h2 className="text-center my-5">Producto no encontrado</h2>;

    return <ItemDetail {...printer} />;
};

export default ItemDetailContainer;
