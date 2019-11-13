export const requerimiento = () => {
  const template = `
  <div class="card " id="dueCard">
  <div class="card-header">
    ¿Que deseas hacer?
  </div>
  <div class="card-body">
  <a href="#/dueComprador"><button type="submit" class="btn-choose" id="due-comprador">DUE DILLIGENCE COMPRADOR</button></a>
  <a href="#/dueVendedor"><button type="submit" class="btn-choose" id="due-vendedor">DUE DILLIGENCE VENDEDOR</button></a>
  </div>`;
  const sectionElem = document.createElement('section');
  sectionElem.setAttribute('class', 'sec-autentificacion display-flex');
  sectionElem.innerHTML += template; // Hasta que no cree este elemento
  return sectionElem;
};