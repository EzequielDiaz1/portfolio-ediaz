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
                    <img src= "nodejs_logo.png" />
                    <img src= "reactjs_tutorial.png" />
                    <img src= "redux.png"/>
                    <img src= "vuejs.png" />
                    <img src= "jest.jpg" />
                    <img src= "Git_icon.svg_.png" />
                    <img src= "html5-40-1175193.png" />  
                    <img src= "CSS3.png" />
                    <img src= "Bootstrap1.png" />
                    <img src= "figma-symbol.png" />
                    <img src= "postman.png" />
                    <img src= "images.jpg" />
                    <img src= "mysql.png" />
                    <img src= "mongodb-logo.png"/>


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
                    <div class="">

                    </div>
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
