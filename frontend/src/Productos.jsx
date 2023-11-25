import React from 'react'
import './styles/productos.css';

export default function Productos() {

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Opcional: animación de desplazamiento suave
    });
  }

  return (
    <>
      <h1 id='titulo_prod'>Productos</h1>


      <div className="container productos-div">
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
                <a href="https://api.whatsapp.com/send?phone=5493743448587&text=Hola,%20estoy%20interesado%20en%20comprar%20el%20Luffy%20Gear5%20por%20$5000.%20[https://i.imgur.com/MZeRSWX.jpg]" target="_blank" rel="noreferrer">
                  <button className='btn btn-custom'>Comprar</button>
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
                <p><span className='negrita'>Anime:</span> Jujutsu Kaisen</p>
                <p><span className='negrita'>Tamaño:</span> A4</p>
                <p><span className='negrita'>Medidas:</span> 21cm x 30cm</p>
              </div>
              <div className="col-md-2" id="precio">
                <p>$5000</p>
                <a href="https://api.whatsapp.com/send?phone=5493743448587&text=Hola,%20estoy%20interesado%20en%20comprar%20el%20Gojo%20Satoru%20por%20$5000.%20[https://i.imgur.com/LChO5GQ.jpg]" target="_blank" rel="noreferrer">
                  <button className='btn btn-custom'>Comprar</button>
                </a>
              </div>
            </div>
          </li>

          <li className="list-group-item">
            <div className="row">
              <div className="col-md-3" id='imagen_div'>
                <img src="./assets/img/toji.jpg" alt="Toji Fushiguro" className='imagen' />
              </div>
              <div className="col-md-7" id="info">
                <h5 className="mt-0" id="tit_prod">Toji Fushiguro</h5>
                <p>Cuadro de Toji Fushiguro estilo manga en blanco y negro</p>
                <p><span className='negrita'>Anime:</span> Jujutsu Kaisen</p>
                <p><span className='negrita'>Tamaño:</span> A4</p>
                <p><span className='negrita'>Medidas:</span> 21cm x 30cm</p>
              </div>
              <div className="col-md-2" id="precio">
                <p>$5000</p>
                <a href="https://api.whatsapp.com/send?phone=5493743448587&text=Hola,%20estoy%20interesado%20en%20comprar%20el%20Toji%20Fushiguro%20por%20$5000.%20[https://i.imgur.com/acRsEXS.jpg]" target="_blank" rel="noreferrer">
                  <button className='btn btn-custom'>Comprar</button>
                </a>
              </div>
            </div>
          </li>

          <li className="list-group-item">
            <div className="row">
              <div className="col-md-3" id='imagen_div'>
                <img src="./assets/img/buda.jpg" alt="Buda" className='imagen' />
              </div>
              <div className="col-md-7" id="info">
                <h5 className="mt-0" id="tit_prod">Buda</h5>
                <p>Cuadro de Budau hecho con acuarelas</p>
                <p><span className='negrita'>Anime:</span> Record of Ragnarok</p>
                <p><span className='negrita'>Tamaño:</span> A4</p>
                <p><span className='negrita'>Medidas:</span> 21cm x 30cm</p>
              </div>
              <div className="col-md-2" id="precio">
                <p>$5000</p>
                <a href="https://api.whatsapp.com/send?phone=5493743448587&text=Hola,%20estoy%20interesado%20en%20comprar%20el%20Buda%20por%20$5000.%20[https://i.imgur.com/m2Kq4eA.jpg]" target="_blank" rel="noreferrer">
                  <button className='btn btn-custom'>Comprar</button>
                </a>
              </div>
            </div>
          </li>

          <li className="list-group-item">
            <div className="row">
              <div className="col-md-3" id='imagen_div'>
                <img src="./assets/img/csm_completo.jpg" alt="CSM Completo" className='imagen' />
              </div>
              <div className="col-md-7" id="info">
                <h5 className="mt-0" id="tit_prod">Chainsaw Man Completo</h5>
                <p>Cuadro de Chainsaw Man al estilo manga en blanco y negro</p>
                <p><span className='negrita'>Anime:</span> Chainsaw Man</p>
                <p><span className='negrita'>Tamaño:</span> A4</p>
                <p><span className='negrita'>Medidas:</span> 21cm x 30cm</p>
              </div>
              <div className="col-md-2" id="precio">
                <p>$5000</p>
                <a href="https://api.whatsapp.com/send?phone=5493743448587&text=Hola,%20estoy%20interesado%20en%20comprar%20el%20ChainsawMan%20por%20$5000.%20[https://i.imgur.com/tkA2F6Y.jpg]" target="_blank" rel="noreferrer">
                  <button className='btn btn-custom'>Comprar</button>
                </a>
              </div>
            </div>
          </li>

          <li className="list-group-item">
            <div className="row">
              <div className="col-md-3" id='imagen_div'>
                <img src="./assets/img/csm_cruz.jpg" alt="CSM Cruz" className='imagen' />
              </div>
              <div className="col-md-7" id="info">
                <h5 className="mt-0" id="tit_prod">Chainsaw Man</h5>
                <p>Cuadro de Chainsaw Man al estilo manga en blanco y negro</p>
                <p><span className='negrita'>Anime:</span> Chainsaw Man</p>
                <p><span className='negrita'>Tamaño:</span> A4</p>
                <p><span className='negrita'>Medidas:</span> 21cm x 30cm</p>
              </div>
              <div className="col-md-2" id="precio">
                <p>$5000</p>
                <a href="https://api.whatsapp.com/send?phone=5493743448587&text=Hola,%20estoy%20interesado%20en%20comprar%20el%20ChainsawMan%20por%20$5000.%20[https://i.imgur.com/Cmr1r25.jpg]" target="_blank" rel="noreferrer">
                  <button className='btn btn-custom'>Comprar</button>
                </a>
              </div>
            </div>
          </li>

          <li className="list-group-item">
            <div className="row">
              <div className="col-md-3" id='imagen_div'>
                <img src="./assets/img/eva01.jpg" alt="Eva 01" className='imagen' />
              </div>
              <div className="col-md-7" id="info">
                <h5 className="mt-0" id="tit_prod">EVA 01</h5>
                <p>Cuadro de EVA 01 al estilo manga en blanco y negro</p>
                <p><span className='negrita'>Anime:</span> Evangelion</p>
                <p><span className='negrita'>Tamaño:</span> A4</p>
                <p><span className='negrita'>Medidas:</span> 21cm x 30cm</p>
              </div>
              <div className="col-md-2" id="precio">
                <p>$5000</p>
                <a href="https://api.whatsapp.com/send?phone=5493743448587&text=Hola,%20estoy%20interesado%20en%20comprar%20el%20EVA01%20por%20$5000.%20[https://i.imgur.com/oIrXsuX.jpg]" target="_blank" rel="noreferrer">
                  <button className='btn btn-custom'>Comprar</button>
                </a>
              </div>
            </div>
          </li>

          <li className="list-group-item">
            <div className="row">
              <div className="col-md-3" id='imagen_div'>
                <img src="./assets/img/gyro.jpg" alt="Gyro" className='imagen' />
              </div>
              <div className="col-md-7" id="info">
                <h5 className="mt-0" id="tit_prod">Gyro Zeppeli</h5>
                <p>Cuadro de Gyro Zeppeli al estilo manga en blanco y negro</p>
                <p><span className='negrita'>Anime:</span> Jojos Bizarre Adventure Parte 7</p>
                <p><span className='negrita'>Tamaño:</span> A4</p>
                <p><span className='negrita'>Medidas:</span> 21cm x 30cm</p>
              </div>
              <div className="col-md-2" id="precio">
                <p>$5000</p>
                <a href="https://api.whatsapp.com/send?phone=5493743448587&text=Hola,%20estoy%20interesado%20en%20comprar%20el%20Gyro%20por%20$5000.%20[https://i.imgur.com/99x0qUw.jpg]" target="_blank" rel="noreferrer">
                  <button className='btn btn-custom'>Comprar</button>
                </a>
              </div>
            </div>
          </li>

          <li className="list-group-item">
            <div className="row">
              <div className="col-md-3" id='imagen_div'>
                <img src="./assets/img/isagi.jpg" alt="Isagi" className='imagen' />
              </div>
              <div className="col-md-7" id="info">
                <h5 className="mt-0" id="tit_prod">Isagi Yoichi</h5>
                <p>Cuadro de Isagi Yoichi hecho con acuarelas</p>
                <p><span className='negrita'>Anime:</span> Blue Lock</p>
                <p><span className='negrita'>Tamaño:</span> A4</p>
                <p><span className='negrita'>Medidas:</span> 21cm x 30cm</p>
              </div>
              <div className="col-md-2" id="precio">
                <p>$5000</p>
                <a href="https://api.whatsapp.com/send?phone=5493743448587&text=Hola,%20estoy%20interesado%20en%20comprar%20el%20Isagi%20por%20$5000.%20[https://i.imgur.com/WhVC5BC.jpg]" target="_blank" rel="noreferrer">
                  <button className='btn btn-custom'>Comprar</button>
                </a>
              </div>
            </div>
          </li>

          <li className="list-group-item">
            <div className="row">
              <div className="col-md-3" id='imagen_div'>
                <img src="./assets/img/makima.jpg" alt="Makima" className='imagen' />
              </div>
              <div className="col-md-7" id="info">
                <h5 className="mt-0" id="tit_prod">Makima</h5>
                <p>Cuadro de Makima hecho con acuarelas</p>
                <p><span className='negrita'>Anime:</span> Chainsaw Man</p>
                <p><span className='negrita'>Tamaño:</span> A5</p>
                <p><span className='negrita'>Medidas:</span> 14,8cm x 21cm</p>
              </div>
              <div className="col-md-2" id="precio">
                <p>$5000</p>
                <a href="https://api.whatsapp.com/send?phone=5493743448587&text=Hola,%20estoy%20interesado%20en%20comprar%20el%20Makima%20por%20$5000.%20[https://i.imgur.com/LZWj0di.jpg]" target="_blank" rel="noreferrer">
                  <button className='btn btn-custom'>Comprar</button>
                </a>
              </div>
            </div>
          </li>

          <li className="list-group-item">
            <div className="row">
              <div className="col-md-3" id='imagen_div'>
                <img src="./assets/img/musashi.jpg" alt="Musashi" className='imagen' />
              </div>
              <div className="col-md-7" id="info">
                <h5 className="mt-0" id="tit_prod">Musashi Miyamoto</h5>
                <p>Cuadro de Musashi Miyamoto al estilo manga en blanco negro</p>
                <p><span className='negrita'>Anime:</span> Vagabond</p>
                <p><span className='negrita'>Tamaño:</span> A4</p>
                <p><span className='negrita'>Medidas:</span> 21cm x 30cm</p>
              </div>
              <div className="col-md-2" id="precio">
                <p>$5000</p>
                <a href="https://api.whatsapp.com/send?phone=5493743448587&text=Hola,%20estoy%20interesado%20en%20comprar%20el%20Musashi%20por%20$5000.%20[https://i.imgur.com/isjafU4.jpg]" target="_blank" rel="noreferrer">
                  <button className='btn btn-custom'>Comprar</button>
                </a>
              </div>
            </div>
          </li>

          <li className="list-group-item">
            <div className="row">
              <div className="col-md-3" id='imagen_div'>
                <img src="./assets/img/vegeta_goku.jpg" alt="Vegeta Goku" className='imagen' />
              </div>
              <div className="col-md-7" id="info">
                <h5 className="mt-0" id="tit_prod">Vegeta y Goku</h5>
                <p>Cuadro de Vegeta y Goku al estilo manga en blanco negro</p>
                <p><span className='negrita'>Anime:</span> Dragon Ball Super</p>
                <p><span className='negrita'>Tamaño:</span> A4</p>
                <p><span className='negrita'>Medidas:</span> 21cm x 30cm</p>
              </div>
              <div className="col-md-2" id="precio">
                <p>$5000</p>
                <a href="https://api.whatsapp.com/send?phone=5493743448587&text=Hola,%20estoy%20interesado%20en%20comprar%20el%20Vegeta%20por%20$5000.%20[https://i.imgur.com/7pN39ZU.jpg]" target="_blank" rel="noreferrer">
                  <button className='btn btn-custom'>Comprar</button>
                </a>
              </div>
            </div>
          </li>

          <li className="list-group-item">
            <div className="row">
              <div className="col-md-3" id='imagen_div'>
                <img src="./assets/img/vegeta_ue.jpg" alt="Vegeta UE" className='imagen' />
              </div>
              <div className="col-md-7" id="info">
                <h5 className="mt-0" id="tit_prod">Vegeta Ultra Ego</h5>
                <p>Cuadro de Vegeta Ultra Ego hecho con acuarelas</p>
                <p><span className='negrita'>Anime:</span> Dragon Ball Super</p>
                <p><span className='negrita'>Tamaño:</span> A4</p>
                <p><span className='negrita'>Medidas:</span> 21cm x 30cm</p>
              </div>
              <div className="col-md-2" id="precio">
                <p>$5000</p>
                <a href="https://api.whatsapp.com/send?phone=5493743448587&text=Hola,%20estoy%20interesado%20en%20comprar%20el%20Vegeta%20por%20$5000.%20[https://i.imgur.com/03uY5jx.jpg]" target="_blank" rel="noreferrer">
                  <button className='btn btn-custom'>Comprar</button>
                </a>
              </div>
            </div>
          </li>

          <li className="list-group-item">
            <div className="row">
              <div className="col-md-3" id='imagen_div'>
                <img src="./assets/img/yuta.jpg" alt="Yuta" className='imagen' />
              </div>
              <div className="col-md-7" id="info">
                <h5 className="mt-0" id="tit_prod">Yuta Okkotsu</h5>
                <p>Cuadro de Yuta Okkotsu al estilo manga en blanco negro</p>
                <p><span className='negrita'>Anime:</span> Jujutsu Kaisen</p>
                <p><span className='negrita'>Tamaño:</span> A4</p>
                <p><span className='negrita'>Medidas:</span> 21cm x 30cm</p>
              </div>
              <div className="col-md-2" id="precio">
                <p>$5000</p>
                <a href="https://api.whatsapp.com/send?phone=5493743448587&text=Hola,%20estoy%20interesado%20en%20comprar%20el%20Yuta%20por%20$5000.%20[https://i.imgur.com/OjVLchl.jpg]" target="_blank" rel="noreferrer">
                  <button className='btn btn-custom'>Comprar</button>
                </a>
              </div>
            </div>
          </li>

        </ul>
      </div>

          <button onClick={scrollToTop} className='btn btn-custom' id="btn-flecha">
            <span class="material-symbols-outlined">
              expand_less</span>
          </button>








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






