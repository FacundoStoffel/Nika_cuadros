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
              <div className="col-md-4">
                <img src="./assets/img/luffy_g5.jpg" alt="Luffy Gear 5" className='imagen' />
              </div>
              <div className="col-md-8">
                <h5 className="mt-0">Luffy Gear 5</h5>
                <p>Descripción del Producto 1.</p>
                <p>$19.99</p>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-md-4">
                <img src="./assets/img/gojo.jpg" alt="Producto 2" className='imagen' />
              </div>
              <div className="col-md-8">
                <h5 className="mt-0">Producto 2</h5>
                <p>Descripción del Producto 2.</p>
                <p>$29.99</p>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-md-4">
                <img src="./assets/img/toji.jpg" alt="Producto 3" className='imagen' />
              </div>
              <div className="col-md-8">
                <h5 className="mt-0">Producto 3</h5>
                <p>Descripción del Producto 3.</p>
                <p>$39.99</p>
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






