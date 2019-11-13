export default () => {
  const template = `

 
  <nav class="navbar container text-center navbar-expand-lg colores-nav navbar-white static-top">
  <div class="container">
    <a class="navbar-brand" href="#">
    <img class="img" src="./lib/Img/Logo-principal---colores-web.png" alt="">

    </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
      aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li>
        <img src="./lib/Img/avatar1.png">
        </li>
        <li class="nav-item active">
          <p class=" px-2 text-dark">Antonia</p>
        </li>
        <li>
        <img src="./lib/Img/flecha.png">

        </li>
      </ul>
    </div>
  </div>
</nav>


<div class="page-content"id="page-content">
  <div class="container text-center style="margin-left: 2rem;">

    <div class="texto_uno p-2 mw-10 mb-3">
      <p class="text-white text-left mb-0 ">HISTORIAL DE REQUERIMIENTOS</p>
    </div>
    <div class="text-left">
    <a href="#/requerimiento" style="width : 12rem;"class="button-req text-left">Nuevo <br>Requerimiento</a>
    </div>
  </div>
</div>

<div class="mx-auto p-4" style="width: 50rem;">
  <div class="borde">
    <div class="container" id="cardComprador">
      <div class="d-flex justify-content-center">
        <div>
        <div class="table-responsive">

                
        <table id="mytable" class="table table-bordred table-striped">
             
             <thead>
             
             <th><input type="checkbox" id="checkall" /></th>
             <th>First Name</th>
              <th>Last Name</th>
               <th>Address</th>
             
                
                 <th>Delete</th>
             </thead>
<tbody>





<tr>
<td><input type="checkbox" class="checkthis" /></td>
<td>Mohsin</td>

<td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>
<td><p data-placement="top" data-toggle="tooltip" title="Edit"><button class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button></p></td>
<td><p data-placement="top" data-toggle="tooltip" title="Delete"><button class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button></p></td>
</tr>








</tbody>
  
</table>
        <div>
 
 
  </div>
      </div>
    </div>
  </div>

</div>
</div>
</div>
</div>

</div>


</div>
</div>

<footer id="sticky-footer" class="py-4 m text-white-50">
  <div class="container text-center">
    <small>Copyright &copy; Your Website</small>
  </div>
</footer>
</body>
    `;
  const sectionElem = document.createElement('section');
  sectionElem.setAttribute('class', 'sec-autentificacion display-flex');
  sectionElem.innerHTML += template; // Hasta que no cree este elemento

 

  return sectionElem;
};
