export default () => {
  const template = `
    <progress value="0" id="uploader" max="100"></progress>
    <input type="file" value="upload" id="fileButton">
    <div id="mensaje"> </div>`;
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

  return sectionElem;
};


//     <a href="mailto:scahuantico@gmail.com?body=Estimada%20te%20enviamos%20el%20siguiente%20link&subject=Miranda%20esta%20revisando%20tu%20caso"> Enviar email</a>