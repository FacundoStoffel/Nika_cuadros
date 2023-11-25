import React from 'react'
import './styles/footer.css';

export default function Footer() {
    return (
        <>
            <footer>
                <div className='footer-container'>
                <div className='div-1'>
                    <ul className="ul-footer">
                        <li>
                            <a href='https://www.instagram.com/cuadros.manga/?hl=es' target='_blank' rel="noreferrer"><img src='./assets/img/icons/instagram.png' id='insta-img' alt='instagram'></img></a>
                        </li>
                        <li>
                        <a href='https://wa.me/5493743448587' target='_blank' rel="noreferrer"><img src='./assets/img/icons/whatsapp.png' id='wpp-img' alt='whatsapp'></img></a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="ul-footer">
                        <li>
                            <img src='./assets/img/icons/mercadopago.png' alt='mercadopago'></img>
                        </li>
                        <li>
                            <img src='./assets/img/icons/lemon.png' alt='lemon'></img>
                        </li>
                        <li>
                            <img src='./assets/img/icons/uala.png' alt='uala'></img>
                        </li>
                        <li>
                            <img src='./assets/img/icons/other.png' alt='other'></img>
                        </li>
                        <li>
                            <img src='./assets/img/icons/pagofacil.png' alt='pagofacil'></img>
                        </li>
                        <li>
                            <img src='./assets/img/icons/rapipago.png' alt='rapipago'></img>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="ul-footer">
                        <li>
                            <img src='./assets/img/icons/correo.png' alt='correo'></img>
                        </li>
                        <li>
                            <img src='./assets/img/icons/branch.png' alt='branch'></img>
                        </li>
                        <li>
                            <img src='./assets/img/icons/table.png' alt='table'></img>
                        </li>
                    </ul>
                </div>
                <div id='footer-derechos'>
                    <p>Todos los derechos reservados</p>
                </div>
                </div>
            </footer>
        </>
    )
}

