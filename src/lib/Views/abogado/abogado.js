export default () => {
  const template = `
  <div>
  <div>
  <a href="#/requerimiento" class="button-req">Crear Requerimiento</a>
  </div>
    <p class="last-req"><strong>Revisa tus últimos Requerimientos</strong></p>
    <ul>
      <li class="list">
        <a class="list-req" href="#proyecto A">Proyecto A</a>
      </li>
      <li class="list">
        <a class="list-req" href="#proyecto B">Proyecto B</a>
      </li>
      <li class="list">
        <a class="list-req" href="#proyecto C">Proyecto C</a>
      </li>
    </ul>
  </div>
    <div id="mensaje"> </div>
    `;
  const sectionElem = document.createElement('section');
  sectionElem.setAttribute('class', 'sec-autentificacion display-flex');
  sectionElem.innerHTML += template; // Hasta que no cree este elemento

  // const getRequiremnts = (id) => {
  //   const req = firebase.firestore().collection('caso 1').doc(id).get();
  //   console.log(req);
  // }
  // getRequiremnts('Relacion de inmuebles');

  // const getRequiremnts = () => {
  //   const req = firebase.firestore().collection('AllCases').doc('cada caso').get()
  //     .then((doc) => {
  //       if (doc.exists) {
  //         console.log("Document data:", doc);
  //       } else {
  //         // doc.data() will be undefined in this case
  //         console.log("No such document!");
  //       }
  //     }).catch(function (error) {
  //       console.log("Error getting document:", error);
  //     });
  // }

 const  getReq = () => {
    firebase.firestore().collection('AllCases').doc('cada caso').collection('Apelacion')
      .onSnapshot((querySnapshot) => {
        const comment = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data())
          //comment.push({ idPost, id: doc.id, ...doc.data() });
        });
        // pintarComentario(comment);
      });
  };
  getReq()

return sectionElem;
};
