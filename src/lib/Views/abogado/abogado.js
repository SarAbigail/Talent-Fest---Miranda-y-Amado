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
  <div>
  <button type="submit" class="button-req">Crear Requerimiento</button>
  </div>
    <a href="mailto:scahuantico@gmail.com?body=Estimada%20te%20enviamos%20el%20siguiente%20link&subject=Miranda%20esta%20revisando%20tu%20caso"> Enviar email</a>
    <progress value="0" id="uploader" max="100"></progress>
    <input type="file" value="upload" id="fileButton">
    <button id="download">Descargar</button>
    <div id="mensaje"> </div>
    `;
  const sectionElem = document.createElement('section');
  sectionElem.setAttribute('class', 'sec-autentificacion display-flex');
  sectionElem.innerHTML += template; // Hasta que no cree este elemento

  const uploader = sectionElem.querySelector('#uploader');
  const fileButton = sectionElem.querySelector('#fileButton');
  fileButton.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref(`1/${file.name}`);
    const task = storageRef.put(file);

    task.on('state_changed',
      (snapshot) => {
        const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 1000;
        uploader.value = percentage;
      });
  });
  const storage = firebase.storage();
  const btnDownload = sectionElem.querySelector('#download');
  const imgRef = storage.ref('1/logosise.png');
  btnDownload.addEventListener('click', () => {
    imgRef.updateMetadata({contentDisposition: 'attachment'})
    .then(() => imgRef.getDownloadURL())
    .then(function(url) {
      const ancle = document.createElement('a');
      ancle.href = url;
      ancle.download = url;
      ancle.click();
    }).catch(function(error) {
      console.log(error)
      // Handle any errors
    });
  });
  return sectionElem;
};
