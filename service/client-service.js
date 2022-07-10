//abrir http (metodo,url)
//CRUD - Metodos HTTP =>
//CREATE - POST
//READ - GET
//UPDATE - PUT/PATCH
//DELETE - DELETE

//fetch APi
const listaClientes = () => fetch("http://localhost:3000/perfil").then( (respuesta) => respuesta.json());

const crearCliente = (nombre, email)=> { 
  return fetch("http://localhost:3000/perfil", {
    method : "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre,email, id: uuid.v4()})
  });
}

export const clientServices = {
  listaClientes,
  crearCliente,
};
