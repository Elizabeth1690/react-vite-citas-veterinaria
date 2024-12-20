const Pacientes = ({ paciente, setPaciente, eliminarPaciente }) => {

  const { nombre, propietario, email, fecha, sintomas, id } = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este Paciente?');
    if (respuesta) {
      eliminarPaciente(id)
    }
  }
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-lg ">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Email:
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta:
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex lg:justify-evenly  justify-center space-x-2  mt-10">
        <button
          type="button"
          className=" py-2 lg:px-11 md:px-11 px-4 md:text-base text-sm bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg  "
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 lg:px-11 md:px-11 px-3 md:text-base text-sm bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg "
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>

  )

}

export default Pacientes