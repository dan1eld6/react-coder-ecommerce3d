import React from 'react'
import './Servicios.css'
const Servicios = () => {
    return (
        <>
            <div id="servicios">
                <section class="container py-5">
                    <h2 class="mb-4">Solicitá tu impresión 3D</h2>
                    <form>
                        <div class="mb-3">
                            <label for="archivo3d" class="form-label detalle">Archivo 3D (.stl, .obj, .3mf)</label>
                            <input type="file" class="form-control" id="archivo3d" accept=".stl,.obj,.3mf" required />
                        </div>

                        <div class="mb-3">
                            <label for="descripcion" class="form-label detalle">Descripción del proyecto</label>
                            <textarea class="form-control" id="descripcion" rows="4"
                                placeholder="Contanos para qué es, medidas, tolerancias, etc." required></textarea>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="material" class="form-label detalle">Tipo de material</label>
                                <select class="form-select" id="material" required>
                                    <option selected disabled>Seleccioná un material</option>
                                    <option>PLA</option>
                                    <option>PETG</option>
                                    <option>ABS</option>
                                    <option>TPU</option>
                                </select>
                            </div>

                            <div class="col-md-6 mb-3">
                                <label for="altura" class="form-label detalle">Altura de capa</label>
                                <select class="form-select" id="altura" required>
                                    <option selected disabled>Seleccioná altura</option>
                                    <option>0.12 mm</option>
                                    <option>0.16 mm</option>
                                    <option>0.20 mm</option>
                                    <option>0.24 mm</option>
                                    <option>0.32 mm</option>
                                </select>
                            </div>

                            <div class="col-md-6 mb-3">
                                <label for="contornos" class="form-label detalle">Cantidad de contornos</label>
                                <select class="form-select" id="contornos" required>
                                    <option selected disabled>Seleccioná cantidad</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>

                            <div class="col-md-6 mb-3">
                                <label for="relleno" class="form-label detalle">Porcentaje de relleno</label>
                                <select class="form-select" id="relleno" required>
                                    <option selected disabled>Seleccioná porcentaje</option>
                                    <option>5%</option>
                                    <option>10%</option>
                                    <option>15%</option>
                                    <option>30%</option>
                                    <option>50%</option>
                                    <option>75%</option>
                                    <option>Sólido</option>
                                </select>
                            </div>
                            {/* Campos nuevos al final del formulario */}
                            <div class="mb-3">
                                <label for="nombre" class="form-label detalle">Tu nombre</label>
                                <input type="text" class="form-control" id="nombre" placeholder="Ej: Juan Pérez" required />
                            </div>

                            <div class="mb-3">
                                <label for="email" class="form-label detalle">Correo electrónico</label>
                                <input type="email" class="form-control" id="email" placeholder="ejemplo@email.com" required />
                            </div>

                        </div>

                        <button type="submit" class="btn btn-dark mt-3">Enviar solicitud</button>
                    </form>
                </section>
            </div>


        </>
    )
}

export default Servicios