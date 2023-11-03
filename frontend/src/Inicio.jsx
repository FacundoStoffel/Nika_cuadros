import React from 'react'
import './styles/inicio.css';

export default function Inicio() {
  return (
    <><div id="titulo">
      <h1>Nika cuadros</h1>
      <h3>Cuadros de animes y manga de la mejor calidad</h3>
    </div>
      <div className='container' id="div2">
        <p id="p1">Tenemos todo tipo de cuadros de anime y manga realizados a mano</p>
        <p id="p2">Si no encontras uno que te guste podes pedir el tuyo personalizado</p>
      </div>
      <div className='container' id="cards_inicio">
        
        <div className="card" >
          <img src="./assets/img/luffy_g5.jpg" className="card-img-top" alt="luffy_g5" />
          <div className="card-body">
            <h5 className="card-title">Luffy Gear 5</h5>
            <p className="card-text"><span className="negrita">Tamaño:</span> A5</p>
            <p className="card-text"><span className="negrita">Anime:</span> One Piece</p>
            <p className="card-text precio"><span className="negrita">Precio:</span> $$$$$</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>

        <div className="card" >
          <img src="./assets/img/gojo.jpg" className="card-img-top" alt="gojo" />
          <div className="card-body">
            <h5 className="card-title">Satoru Gojo</h5>
            <p className="card-text"><span className="negrita">Tamaño:</span> A4</p>
            <p className="card-text"><span className="negrita">Anime:</span> Jujutsu Kaisen</p>
            <p className="card-text precio"><span className="negrita">Precio:</span> $$$$$</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>

        <div className="card" >
          <img src="./assets/img/toji.jpg" className="card-img-top" alt="toji" />
          <div className="card-body">
            <h5 className="card-title">Toji Fushiguro</h5>
            <p className="card-text"><span className="negrita">Tamaño:</span> A4</p>
            <p className="card-text"><span className="negrita">Anime:</span> Jujutsu Kaisen</p>
            <p className="card-text precio"><span className="negrita">Precio:</span> $$$$$</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>

        <div className="card" >
          <img src="./assets/img/eva01.jpg" className="card-img-top" alt="eva01" />
          <div className="card-body">
            <h5 className="card-title">Eva 01</h5>
            <p className="card-text"><span className="negrita">Tamaño:</span> A4</p>
            <p className="card-text"><span className="negrita">Anime:</span> Evangelion</p>
            <p className="card-text precio"><span className="negrita">Precio:</span> $$$$$</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>

      </div>

      <div className='envio'>
        <span className="material-symbols-outlined">
          local_shipping
        </span>
        <p>Envios a todo el pais</p>
      </div>
    </>
  )
}
