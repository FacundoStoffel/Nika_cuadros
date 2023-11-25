import React from 'react'
import './styles/menu.css';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img id="logo" src="./nika.jpg" alt="Bootstrap" />
                    <a className="navbar-brand" href="/">Nika Cuadros</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav mx-auto" >
                            <li className="nav-item">
                                <Link to="/productos" className="nav-link active link" aria-current="page">Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/nosotros" className="nav-link active link">Sobre Nosotros</Link>
                            </li>
                            <li><a className="nav-link active link" href='https://wa.me/5493743448587' target='blank'>Contáctame</a></li>
                        </ul>
                    </div>
                    

                </div>
            </nav>
        </>
    )
}
