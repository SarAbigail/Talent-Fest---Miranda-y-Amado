import { viewTemplate } from './lib/Router/router.js';

                                                                                                                  
const storage = firebase.storage();

const init = () => {
  viewTemplate(window.location.hash);
  window.addEventListener('hashchange', () => viewTemplate(window.location.hash));
};

window.addEventListener('load', init);
