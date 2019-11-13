export default () => {
  const template = `
  <div>
  <div>
  <a href="#/abogadoReq" class="button-req">Crear Requerimiento</a>
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
 
   
    
    `;
  const sectionElem = document.createElement('section');
  sectionElem.setAttribute('class', 'sec-autentificacion display-flex');
  sectionElem.innerHTML += template; // Hasta que no cree este elemento

<<<<<<< HEAD
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
  const imgRef = storage.ref('1/dl.png');
  btnDownload.addEventListener('click', () => {
    imgRef.getDownloadURL().then((url) => {
      console.log(url);
      const anchor = document.createElement('a');
      anchor.href = url;
      div.setAttribute('download', true);
      btnDownload.appendChild(div);
    })
  });

  // Create a reference to the file whose metadata we want to change
  var forestRef = firebase.storage().ref().child('1/dl.png');

  // Create file metadata to update
  var newMetadata = {
    public: true,
    cacheControl: 'public,max-age=300',
    contentType: 'image/jpeg',
    contentLanguage: null,
    customMetadata: {
      whatever: 'we feel like',
    },
  };

  // Update metadata properties
  forestRef
    .updateMetadata(newMetadata)
    .then(function (metadata) {
      // Updated metadata for 'images/forest.jpg' is returned in the Promise
    })
    .catch(function (error) {
      // Uh-oh, an error occurred!
    });
=======
 
>>>>>>> 83777c37bd8596e7868de58df160f6d200348822
  return sectionElem;

};


