export const abogadoReq = () => {
  const template = `
  <div class="card " id="dueCard">
  <div class="card-header">
    ¿Que deseas hacer?
  </div>
  <div class="card-body">
  <button type="submit" class="btn-choose" id="due-comprador">DUE DILLIGENCE COMPRADOR</button>
  <button type="submit" class="btn-choose" id="due-vendedor">DUE DILLIGENCE VENDEDOR</button>
  </div>
</div>

<div class="container hidden" id="cardComprador">
  <p>DUE DILLIGENCE COMPRADOR</p>
  <div class="row">
    <div class="col-12">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Seleccionar</th>
            <th scope="col">Documentos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck1" checked>
                  <label class="custom-control-label" for="customCheck1">1</label>
              </div>
            </td>
            <td>Relación de inmuebles</td>
          </tr>
          <tr>
            <td>
              <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck2">
                  <label class="custom-control-label" for="customCheck2">2</label>
              </div>
            </td>
            <td>Relación de trabajadores</td>
          </tr>
          <tr>
            <td>
              <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck3">
                  <label class="custom-control-label" for="customCheck3">3</label>
              </div>
            </td>
            <td>Listado de principales clientes</td>
          </tr>
          <tr>
            <td>
              <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck4">
                  <label class="custom-control-label" for="customCheck4">4</label>
              </div>
            </td>
            <td>Copia de la planilla electrónica</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
`;
  const sectionElem = document.createElement('section');
  sectionElem.setAttribute('class', 'sec-autentificacion display-flex');
  sectionElem.innerHTML += template; // Hasta que no cree este elemento

  const dueComprador = sectionElem.querySelector('#due-comprador');
  dueComprador.addEventListener('click', ()=> {
    const dueCard = document.getElementById('dueCard');
    const cardComprador = document.getElementById('cardComprador');
    dueCard.classList.add('hidden');
    cardComprador.classList.remove('hidden');
  });

  const dueVendedor = sectionElem.querySelector('#due-vendedor');
  dueVendedor.addEventListener('click', ()=> {
    const dueCard = document.getElementById('dueCard');
    const cardComprador = document.getElementById('cardComprador');
    dueCard.classList.add('hidden');
    cardComprador.classList.remove('hidden');
  });


  // const vendedor = sectionElem.querySelector('#vendedor');
  // const contenedor1 = document.createElement('tr');
  // let acum = '';
  // vendedor.addEventListener('click', () => {
  //   verRequerimientos('requerimientos', 'DUE DILIGENCE DE VENDEDOR')
  //     .then(docs => {
  //       docs.data().requerimientos.forEach(doc => {
  //         acum += `<td><p>${doc}</p></td>`
  //         console.log(doc);
  //       });
  //       contenedor1.innerHTML+= `${acum}`
  //       sectionElem.appendChild(contenedor1)
  //     })
  //     .catch(() => console.log('error'));
  
  return sectionElem;
};
