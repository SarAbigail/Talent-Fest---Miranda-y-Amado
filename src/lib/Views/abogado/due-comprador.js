import {
  verRequerimientos
} from '../../Model/firebase-db.js'

export const dueComprador = () => {
  const template = `

  <div class="container hidden" id="cardComprador">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h4>DUE DILIGENCE DE COMPRADOR</h4>
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
  </div>`;

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
  box.innerHTML = '';

    verRequerimientos('requerimientos', 'DUE DILIGENCE DE COMPRADOR')
      .then(docs => {
        const dataReq = docs.data().requerimientos;
        dataReq.forEach(doc => {
          const contenedor1 = document.createElement('tr');
          let acum = '';
          acum += `
                  <td>
                    <input type="checkbox" value="${doc.value}" class="checkthis" />
                  </td>
                  <td>
                    <p>${doc.value}</p>
                  </td>
                `;
          contenedor1.innerHTML = `${acum}`;
          console.log('c',contenedor1);
          box.appendChild(contenedor1);
        });
      })
      .catch((err) => console.log('error', err));

  return sectionElem;
};
