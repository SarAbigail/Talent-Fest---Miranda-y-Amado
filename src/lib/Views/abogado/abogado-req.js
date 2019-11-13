import {
  verRequerimientos
} from '../../Model/firebase-db.js'
export const abogadoReq = () => {
  const template = `
  <div class="card " id="dueCard">
    <div class="card-header">
      <p>¿Que deseas hacer?</p>
    </div>
    <div class="card-body">
      <button type="submit" class="btn-choose" id="due-comprador">DUE DILLIGENCE COMPRADOR</button>
      <button type="submit" class="btn-choose" id="due-vendedor">DUE DILLIGENCE VENDEDOR</button>
    </div>
  </div>

  <div class="container hidden" id="cardComprador">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h4>DUE DILIGENCE DE VENDEDOR</h4>
          <div class="table-responsive">    
            <table id="mytable" class="table">
              <thead>
                <tr>
                 <th>
                  <input type="checkbox" id="checkall" />
                 </th>
                 <th>DOCUMENTO</th>
                </tr>
              </thead>
              <tbody id ="contenedor">
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
  $(document).ready(function () {
    $("#mytable #checkall").click(function () {
      if ($("#mytable #checkall").is(':checked')) {
        $("#mytable input[type=checkbox]").each(function () {
          $(this).prop("checked", true);
        });

      } else {
        $("#mytable input[type=checkbox]").each(function () {
          $(this).prop("checked", false);
        });
      }
    });

    $("[data-toggle=tooltip]").tooltip();
  });
  const sectionElem = document.createElement('section');
  sectionElem.setAttribute('class', 'sec-autentificacion display-flex');
  sectionElem.innerHTML += template; // Hasta que no cree este elemento

  const box = sectionElem.querySelector('#contenedor');
  box.innerHTML= '';
  const dueComprador = sectionElem.querySelector('#due-comprador');

  dueComprador.addEventListener('click', () => {
    const dueCard = document.getElementById('dueCard');
    const cardComprador = document.getElementById('cardComprador');
    dueCard.classList.add('hidden');
    cardComprador.classList.remove('hidden');
    verRequerimientos('requerimientos', 'DUE DILIGENCE DE VENDEDOR')
      .then(docs => {
        docs.data().requerimientos.forEach(doc => {
          const contenedor1 = document.createElement('tr');
          let acum = '';

          acum += `
          
           <td><input type="checkbox" class="checkthis" /></td>
            <td><p>${doc}</p></td>
          
          
         `;
         contenedor1.innerHTML = `${acum}`;
         box.appendChild(contenedor1)
        });

      })
      .catch((err) => console.log('error', err));

  });

  const dueVendedor = sectionElem.querySelector('#due-vendedor');
  dueVendedor.addEventListener('click', () => {
    const dueCard = document.getElementById('dueCard');
    const cardComprador = document.getElementById('cardComprador');
    dueCard.classList.add('hidden');
    cardComprador.classList.remove('hidden');
  });





  return sectionElem;
};