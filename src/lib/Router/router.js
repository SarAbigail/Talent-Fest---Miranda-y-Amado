import { components } from './components.js';

export const viewTemplate = (routes) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (routes) {
    case '#/login':
      container.appendChild(components.login());
      break;
    case '#/abogado':
      container.appendChild(components.abogado());
      break;
    default:
      container.appendChild(components.login());
      break;
    case '#/abogadoReq':
      container.appendChild(components.abogadoReq());

  }
};
