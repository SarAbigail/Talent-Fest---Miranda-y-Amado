import login from '../Views/login.js';
import abogado from '../Views/abogado/abogado.js';
import { requerimiento } from '../Views/abogado/requerimiento.js';
import { dueComprador } from '../Views/abogado/due-comprador.js'
import { dueVendedor } from '../Views/abogado/due-vendedor.js';
import { form } from '../Views/abogado/form.js'
import { formCliente } from '../Views/cliente/form-cliente.js';
import prueba from '../Views/abogado/clienteprueba.js';

export const components = {
  login: login,
  abogado: abogado,
  requerimiento: requerimiento,
  dueComprador: dueComprador,
  dueVendedor: dueVendedor,
  form: form,
  formCliente: formCliente,
  prueba:prueba,
};
