import React, { useState } from "react";
import "./FormCheckout.css";


export default function FormCheckout({ onSubmit }) {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Formulario enviado:", formData);
        if (onSubmit) onSubmit(formData); // Llama a la función del padre si existe
    }

    return (
        <form onSubmit={handleSubmit} className="form-checkout">
            <label>
                Nombre:
                <input
                    value={formData.username}
                    type="text"
                    name="username"
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Email:
                <input
                    value={formData.email}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Teléfono:
                <input
                    value={formData.phone}
                    type="tel"
                    name="phone"
                    onChange={handleChange}
                    required
                />
            </label>

            <button type="submit" className="btn btn-primary">
                Enviar
            </button>
        </form>
    );
}
