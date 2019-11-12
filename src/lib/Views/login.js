import { signIn } from '../Controller/a-controll.js';

export default () => {
  const template = `
        <form class="display-flex form-login"> 
          <p class="text-login"><br> <strong></strong></p>
          <div>
          <input type="email" id="input-mail" class="login-input" placeholder="ejemplo@ejemplo.com">
          <span id="icon-mail" class="icon-input"></span>
          </div>
          <div class="cont-password">
          <input type="password" id="input-password" class="login-input class-input" placeholder="Escribe tu contraseña" >
          <span id="icon-clave" class="icon-input icon-clave"></span>
          <span id="icon-password" class="icon-input"></span>
          </div>
          <p class="ms-info-alert" id="ms-info-alert"></p>
          
          <button class="btn login-btn" id="btn-iniciar-registrar" data-action ='login'>Iniciar Sesión</button>
          <div class="cont-btn-redes display-flex">
          </div>
                    </form>`;

  const sectionElem = document.createElement('section');
  sectionElem.setAttribute('class', 'sec-autentificacion display-flex');
  sectionElem.innerHTML += template; // Hasta que no cree este elemento
  const inputPassword = sectionElem.querySelector('#input-password');
  const btnIniciarRegistrar = sectionElem.querySelector('#btn-iniciar-registrar');
  const btnMostrarClave = sectionElem.querySelector('#icon-clave');

  let claveOculta = 0;

  // loginGoogle.addEventListener('click', signInWithGoogle);

  btnIniciarRegistrar.addEventListener('click', signIn);

  btnMostrarClave.addEventListener('click', () => {
    if (claveOculta === 0) {
      inputPassword.setAttribute('type', 'text');
      claveOculta = 1;
      btnMostrarClave.classList.add('mostrar');
    } else {
      inputPassword.setAttribute('type', 'password');
      claveOculta = 0;
      btnMostrarClave.classList.remove('mostrar');
    }
  });
  return sectionElem;
};
