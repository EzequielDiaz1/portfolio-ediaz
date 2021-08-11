import React from 'react';
import './About.css';
import fotoEquiel from '../../media/fotoEquiel.jpg';

const About = () => {
  return (
    <div className="about-conteiner">
      <div className="about-desc">
        <h3>Sobre mí...</h3>
        <p>Mi nombre es Ezequiel soy de Córdoba, Argentina.</p>
        <p>
          Tengo 23 años. Nací el 16 de diciembre de 1997{' '}
          <span style={{ fontSize: '13px' }}>(Para el regalito 😜)</span>
        </p>
        <div
          style={{
            textAlign: 'center',
            fontSize: '19px',
            marginTop: '12px',
            fontWeight: 700,
          }}
        >
          <p>Apasionado por los videojuegos</p>
          <p>Jugador de Handball</p>
          <p>Full-Stack Developer</p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around !important',
            marginTop: '5em',
          }}
        >
          <div className="boton1">
            <button
              className="botonTech"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            ></button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content" style={{ color: 'black' }}>
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Tech Skills
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <img src="https://lh3.googleusercontent.com/proxy/Ip3G-Ez_VP6PYx8-m80BKAPIaZRQpatSfp7CnwkUEN6nR6CNrFBzzH0Q3OdktCtDGEJj4CqVcnfSV_lXJaADtrGoFFcAtZBsqQ"></img>
                    <img src="https://davidrengifo.files.wordpress.com/2017/08/nodejs_logo.png"></img>
                    <img src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_256/https://itsolution24x7.com/blog/wp-content/uploads/2020/06/express.png"></img>
                    <img src="https://justcodeit.io/wp-content/uploads/Git_icon.svg_.png"></img>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png"></img>
                    <img src="https://blastcoding.com/wp-content/uploads/2018/10/CSS3.png"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnPW1xPjnjrv6kSXFMWpGNZbmDEXzNCa3Fvou114yxt-UFCS0OCwACWcPWR9SPIRULEJc&usqp=CAU"></img>
                    <img src="https://4.bp.blogspot.com/-_YSVTe2ekBU/XKMntJDH0ZI/AAAAAAAAXNk/3d48i_XShWwvoMNj0YJWp2J4_Woh9dzGgCLcBGAs/s1600/reactjs%2Btutorial.png"></img>
                    <img src="https://design.bkool.com/images/components/figma-symbol.png"></img>
                    <img src="https://miro.medium.com/max/256/1*7Mh2Gq542qUfMlx6iTgE2Q.png"></img>
                    <img src="https://www.buenosaires.gob.ar/sites/gcaba/files/vuejs.png"></img>
                    <img src="https://i.pinimg.com/originals/22/7d/36/227d362950c4a6162452fd801984bb51.png"></img>
                    <img src="https://es-wiki.ikoula.com/images/a/a3/Postgre.png"></img>
                    <img src="https://www.am-design.es/Content/img/Bootstrap1.png"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="boton2">
            <button
              className="botonTech1"
              data-bs-toggle="modal"
              data-bs-target="#softSkills"
            ></button>

            <div
              class="modal fade"
              id="softSkills"
              tabindex="-1"
              aria-labelledby="examplesoftSkillsLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content" style={{ color: 'black' }}>
                  <div class="modal-header">
                    <h5 class="modal-title" id="examplesoftSkillsLabel">
                      Soft Skills
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <p>Que me importa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="boton3">
            <button
              className="botonTech2"
              data-bs-toggle="modal"
              data-bs-target="#libraries"
            ></button>

            <div
              class="modal fade"
              id="libraries"
              tabindex="-1"
              aria-labelledby="examplesLibrariesLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content" style={{ color: 'black' }}>
                  <div class="modal-header">
                    <h5 class="modal-title" id="examplesLibrariesLabel">
                      Librerías
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <p>Que me importa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-img">
        <img src={fotoEquiel} alt="about"></img>
      </div>
    </div>
  );
};

export default About;
