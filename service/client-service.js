//abrir http (metodo,url)
//CRUD - Metodos HTTP
//CREATE - POST
//READ - GET
//UPDATE - PUT/PATCH
//DELETE - DELETE
//fetch APi
const listaClientes = () => fetch("http://localhost:3000/perfil").then( (respuesta) => respuesta.json());

export const clientServices = {
  listaClientes,
};