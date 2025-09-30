import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-white py-4">
                <div className="container">
                    <div className="div-footer">
                        <div className="col-12 col-md-4 mb-3 item-footer"><img src="/pin-point.png"
                            className="iconos me-2" /><span>Avenida Siempre Viva 123</span></div>
                        <div className="col-12 col-md-4 mb-3c item-footer">
                            <img src="/whatsapp.png" className="iconos me-2" />
                            <img src="/phone.png" className="iconos me-2" />
                            <span>+54-9-11-9999-0000</span>
                        </div>
                        <div className="col-12 col-md-4 mb-3 item-footer">
                            <img src="/facebook.png" className="iconos me-2" />
                            <img src="/tiktok.png" className="iconos me-2" />
                            <img src="/instagram.png" className="iconos me-2" />
                            <span>@3dworld</span>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer