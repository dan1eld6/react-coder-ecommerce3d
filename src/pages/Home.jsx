import React from 'react';
import './Home.css';

const Home = () => {
return (
    <>
        <main className="container mt-4">
            <section id="superior">
                <h1>El mejor lugar para el maker, 3DWorld</h1>
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 text-center">
                        <img src="/img1a.webp" alt="3DWorld Logo" className="img-fluid img-home" />
                    </div>
                    <div className="col-12 col-md-6">
                        <p>
                            Transformamos tus ideas en realidades tangibles.
                            <br />
                            En 3DWorld llevamos la innovación al siguiente nivel.
                            <br />
                            Somosespecialistas en impresión 3D de alta calidad,
                            <br />
                            creando piezas personalizadas con precisión,
                            <br />
                            rapidez y materiales de última generación.
                            <br />
                            Desde prototipos funcionales
                            hasta productos finales,
                            <br />
                            hacemos que cada diseño cobre
                            vida.
                        </p>
                    </div>
                </div>
            </section>

            <section id="medio">
                <h2>¿Qué ofrecemos?</h2>
                <div className="row align-items-center div-medio">
                    <div className="col-md-4">
                        <ul>
                            <li data-aos="fade-up" className="item-mid-page">✅ Impresión 3D a medida para cada proyecto.</li>
                            <li data-aos="fade-up" data-aos-delay="100" className="item-mid-page">⚡ Prototipado rápido para acelerar tu
                                desarrollo.</li>
                            <li data-aos="fade-up" data-aos-delay="100" className="item-mid-page">🧠 Asesoramiento técnico desde el diseño
                                hasta el producto final.</li>
                            <li data-aos="fade-up" data-aos-delay="100" className="item-mid-page">🎨 Variedad de materiales: PLA, ABS, PETG,
                                resina, TPU, y más.</li>
                            <li data-aos="fade-up" data-aos-delay="100" className="item-mid-page">🔍 Detalles precisos gracias a tecnología
                                de alta resolución.</li>
                            <li data-aos="fade-up" data-aos-delay="100" className="item-mid-page">📦 Producción de piezas únicas o en
                                pequeñas series bajo demanda.</li>
                            <li data-aos="fade-up" data-aos-delay="100" className="item-mid-page">🌱 Materiales sostenibles y biodegradables
                                disponibles.</li>
                            <li data-aos="fade-up" data-aos-delay="100" className="item-mid-page">💡 Ideal para arquitectos, ingenieros,
                                diseñadores y makers.</li>
                            <li data-aos="fade-up" data-aos-delay="100" className="item-mid-page">📐 Personalización total: tamaño, forma y
                                funcionalidad.</li>
                            <li data-aos="fade-up" data-aos-delay="100" className="item-mid-page">⏱️ Plazos de entrega rápidos adaptados a
                                tus necesidades.</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4">
                        <img src="/img3.webp" alt="Materiales 3D" className="img-fluid img-home mb-3" />
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li data-aos="fade-up" className="item-mid-page">🖨️ Impresoras 3D de última generación para todos los niveles.
                            </li>
                            <li data-aos="fade-up" data-aos-delay="100" className="item-mid-page">🎯 Filamentos premium: PLA, PETG, ABS,
                                TPU, nylon y más.</li>
                            <li data-aos="fade-up" data-aos-delay="100" className="item-mid-page">🔧 Repuestos originales y compatibles para
                                mantenimiento y upgrades.</li>
                            <li data-aos="fade-up" data-aos-delay="100" className="item-mid-page">📦 Kits completos para empezar a imprimir
                                desde el primer día.</li>
                            <li data-aos="fade-up" data-aos-delay="100" className="item-mid-page">🎨 Gran variedad de colores y acabados en
                                filamentos.</li>
                            <li data-aos="fade-up" data-aos-delay="100" className="item-mid-page">💨 Filamentos de alta velocidad para
                                impresiones más rápidas.</li>
                            <li data-aos="fade-up" data-aos-delay="100" className="item-mid-page">💡 Accesorios imprescindibles: boquillas,
                                camas, extrusores, adhesivos.</li>
                            <li data-aos="fade-up" data-aos-delay="100" className="item-mid-page">🔋 Electrónica y componentes: placas
                                madre, drivers, sensores y más.</li>
                            <li data-aos="fade-up" data-aos-delay="100" className="item-mid-page">📘 Guías y soporte para elegir el equipo
                                ideal según tu necesidad.</li>
                            <li data-aos="fade-up" data-aos-delay="100" className="item-mid-page">🚚 Envíos a todo el país con opciones
                                express.</li>

                        </ul>
                    </div>
                </div>
            </section>


            <section id="inferior">
                <h2>¿Por qué elegirnos?</h2>
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <p>
                            Impresión 3D a medida Personalizamos cada proyecto según tus necesidades,
                            <br />
                            ya sea una pieza única o una
                            producción en serie.
                            <br />
                            Prototipado rápido Acelera tu desarrollo
                            con prototipos funcionales,
                            <br />
                            perfectos para pruebas y presentaciones.
                            <br />
                            Asesoramiento técnico Nuestro equipo te
                            acompaña desde la idea hasta el producto final.
                            <br />
                            Te ayudamos a optimizar tu diseño para obtener los mejores resultados.
                            <br />
                            Variedad de materiales y acabados PLA,
                            ABS, resina, PETG, TPU y más.
                            <br />
                            Elegí lo que mejor se adapte
                            a tu proyecto.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 text-center">
                        <img src="/img2.webp" alt="3DWorld Logo" className="img-fluid img-home" />
                    </div>
                </div>
            </section>

            <section id="acerca-de">
                <h3>🧩 Acerca de Nosotros</h3>
                <p className="nosotros">
                    En 3DWORLD, llevamos más de 10 años impulsando la innovación a través de la tecnología de
                    impresión 3D. Nuestro compromiso con la calidad, la eficiencia y la atención personalizada nos ha
                    posicionado como un referente en el rubro tanto para profesionales como para entusiastas del diseño y la
                    fabricación.
                    <br />
                    Nos especializamos en la venta de impresoras 3D de alta calidad, filamentos, repuestos y accesorios,
                    ofreciendo asesoramiento para que cada cliente encuentre el equipo y los materiales ideales para su
                    proyecto.
                    <br />
                    Además, contamos con un servicio integral de impresión 3D a medida, orientado a diferentes industrias como
                    arquitectura, ingeniería, diseño industrial, medicina, educación y arte. Acompañamos a nuestros clientes
                    desde la idea inicial hasta el producto final, asegurando precisión, durabilidad y resultados sorprendentes.
                    <br />
                    Ya seas una empresa, un profesional o un creador independiente, en 3DWORLD encontrás las
                    herramientas, el soporte y la experiencia necesarios para llevar tus ideas a una nueva dimensión.
                    <br />
                </p>
            </section>
        </main>

    </>
);
};

export default Home;