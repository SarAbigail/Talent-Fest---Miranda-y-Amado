export const abogadoReq = () => {
  const template = `
  <div class="card " id="card1">
  <div class="card-header">
    ¿Que deseas hacer?
  </div>
  <div class="card-body">
  <button type="submit" class="btn-choose" id="due-comprador">DUE DILLIGENCE COMPRADOR</button>
  <button type="submit" class="btn-choose" id="due-vendedor">DUE DILLIGENCE VENDEDOR</button>
  </div>
</div>

<div class="container hidden" id="card2">
  <div class="row">
    <div class="col-12">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Select Day</th>
            <th scope="col">Article Name</th>
            <th scope="col">Author</th>
            <th scope="col">Words</th>
            <th scope="col">Shares</th>
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
            <td>Bootstrap 4 CDN and Starter Template</td>
            <td>Cristina</td>
            <td>913</td>
            <td>2.846</td>
          </tr>
          <tr>
            <td>
              <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck2">
                  <label class="custom-control-label" for="customCheck2">2</label>
              </div>
            </td>
            <td>Bootstrap Grid 4 Tutorial and Examples</td>
            <td>Cristina</td>
            <td>1.434</td>
            <td>3.417</td>
          </tr>
          <tr>
            <td>
              <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck3">
                  <label class="custom-control-label" for="customCheck3">3</label>
              </div>
            </td>
            <td>Bootstrap Flexbox Tutorial and Examples</td>
            <td>Cristina</td>
            <td>1.877</td>
            <td>1.234</td>
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
  dueComprador.addEventListener('click', ()=>{
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    card1.classList.add('hidden');
    card2.classList.remove('hidden');
  });

  const dueVendedor = sectionElem.querySelector('#due-vendedor');
  dueVendedor.addEventListener('click', ()=>{
    const card1 = document.getElementById('card1');
    card1.classList.add('hidden');
  });

  return sectionElem;
};
