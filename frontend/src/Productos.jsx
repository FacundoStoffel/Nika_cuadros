import React from 'react'
import './styles/productos.css';

export default function Productos() {
  return (
    <>
      <h1 id='titulo_prod'>Productos</h1>


      <div className="container">
        <ul className="list-group">
          <li className="list-group-item">
            <div className="row">
              <div className="col-md-3">
                <img src="./assets/img/luffy_g5.jpg" alt="Luffy Gear 5" className='imagen' />
              </div>
              <div className="col-md-7" id="info">
                <h5 className="mt-0" id="tit_prod">Luffy Gear 5</h5>
                <p>Cuadro de Monkey D. Luffy Gear 5 hecho con acuarelas</p>
                <p><span className='negrita'>Anime:</span> One Piece</p>
                <p><span className='negrita'>Tamaño:</span> A5</p>
                <p><span className='negrita'>Medidas:</span> 14,8cm x 21cm</p>
              </div>
              <div className="col-md-2" id="precio">
                <p>$5000</p>
                <a href="https://api.whatsapp.com/send?phone=5493743448587&text=Hola,%20estoy%20interesado%20en%20comprar%20el%20Luffy%20Gear5%20por%20$5000.%20[https://i.imgur.com/MZeRSWX.jpg]" target="_blank">
                  <button className='btn btn-info'>Comprar</button>
                </a> 
              </div>
            </div>
          </li>

          <li className="list-group-item">
            <div className="row">
              <div className="col-md-3">
                <img src="./assets/img/gojo.jpg" alt="Gojo Satoru" className='imagen' />
              </div>
              <div className="col-md-7" id="info">
                <h5 className="mt-0" id="tit_prod">Gojo Satoru</h5>
                <p>Cuadro de Gojo Satoru estilo manga en blanco y negro</p>
                <p><span className='negrita'>Anime:</span> Jujutsu Kaise</p>
                <p><span className='negrita'>Tamaño:</span> A4</p>
                <p><span className='negrita'>Medidas:</span> 21cm x 30cm</p>
              </div>
              <div className="col-md-2" id="precio">
                <p>$5000</p>
                <a href="https://api.whatsapp.com/send?phone=5493743448587&text=Hola,%20estoy%20interesado%20en%20comprar%20el%20Gojo%20Satoru%20por%20$5000.%20[https://i.imgur.com/LChO5GQ.jpg]" target="_blank">
                  <button className='btn btn-info'>Comprar</button>
                </a> 
              </div>
            </div>
          </li>

          <li className="list-group-item">
            <div className="row">
              <div className="col-md-3">
                <img src="./assets/img/toji.jpg" alt="Toji Fushiguro" className='imagen' />
              </div>
              <div className="col-md-7" id="info">
                <h5 className="mt-0" id="tit_prod">Toji Fushiguro</h5>
                <p>Cuadro de Toji Fushiguro estilo manga en blanco y negro</p>
                <p><span className='negrita'>Anime:</span> Jujutsu Kaise</p>
                <p><span className='negrita'>Tamaño:</span> A4</p>
                <p><span className='negrita'>Medidas:</span> 21cm x 30cm</p>
              </div>
              <div className="col-md-2" id="precio">
                <p>$5000</p>
                <a href="https://api.whatsapp.com/send?phone=5493743448587&text=Hola,%20estoy%20interesado%20en%20comprar%20el%20Toji%20Fushiguro%20por%20$5000.%20[https://i.imgur.com/acRsEXS.jpg]" target="_blank">
                  <button className='btn btn-info'>Comprar</button>
                </a> 
              </div>
            </div>
          </li>


        </ul>
      </div>









      {/* <div classNameName='container'>

      <div classNameName="card mb-3" id="prod" >
        <div classNameName="row g-0">
          <div classNameName="col-md-4">
            <img src="./assets/img/luffy_g5.jpg" classNameName="img-fluid rounded-start" alt="..." />
          </div>
          <div classNameName="col-md-8">
            <div classNameName="card-body">
              <h5 classNameName="card-title">Card title</h5>
              <p classNameName="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p classNameName="card-text"><small classNameName="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>

      <div classNameName="card mb-3" >
        <div classNameName="row g-0">
          <div classNameName="col-md-4">
            <img src="..." classNameName="img-fluid rounded-start" alt="..." />
          </div>
          <div classNameName="col-md-8">
            <div classNameName="card-body">
              <h5 classNameName="card-title">Card title</h5>
              <p classNameName="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p classNameName="card-text"><small classNameName="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>

      </div> */}

    </>
  )
}






