import { components } from './components.js';

export const viewTemplate = (routes) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (routes) {
    case '#/':
      container.appendChild(components.A());
      break;
    case '#/b':
      container.appendChild(components.B());
      break;
    default:
      container.appendChild(components.A());
      break;
  }
};
