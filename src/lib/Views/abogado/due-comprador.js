import {
  verRequerimientos
} from '../../Model/firebase-db.js'


let array = [];

export const dueComprador = () => {
  const template = `

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
      //let i = 0;
      dataReq.forEach(doc => {
        const contenedor1 = document.createElement('tr');
        let acum = '';
        //i++;
        acum += `
                  <td>
                    <input type="checkbox" value="${doc.value}" class="checkthis" id="${doc.value}" />
                  </td>
                  <td>
                    <p>${doc.value}</p>
                  </td>
                `;
                
                contenedor1.innerHTML = `${acum}`;
                box.appendChild(contenedor1);

              });

              box.querySelectorAll('.checkthis').forEach((checkbox) => 
                checkbox.addEventListener('click', (e) => {
                  array.push(e.target.id)
                  console.log(array)
                }))

    })
    .catch((err) => console.log('error', err));

    const createRequirement = (caso, item, nombre, email) => {
      firebase.firestore().collection(caso).doc(item).set({
      Cliente: nombre,
      Estado: 'pendiente',
      Correo: email,
    })
  }
  return sectionElem;
};
