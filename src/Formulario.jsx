import React from 'react';

function Formulario() {
  return (
    <>
      <div className="bg-gray-200 p-2 mb-3">
        <h2 className="text-black text-lg font-bold">Documentos Pendientes</h2>
      </div>
      <div className="bg-blue-200 p-2 mx-2 justify-start">
        <h3 className="text-black text-sm font-bold">FILTROS DE DOCUMENTOS</h3>
      </div>
      <div className="bg-white p-4 mx-2 shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label htmlFor="estatus" className="text-black text-xs font-bold">Estatus</label>
            <select id="estatus" className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Seleccione...</option>                        
              <option value="documentos_pendientes">Documentos Pendientes</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="tipoDocumento" className="text-black text-xs font-bold">Tipo Documento</label>
            <select id="tipoDocumento" className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Seleccione...</option>                        
              <option value="todos">Todos</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="proveedor" className="text-black text-xs font-bold">Proveedor</label>
            <select id="proveedor" className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Seleccione...</option>                        
              <option value="opcion">Opción 1</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="rangoEmision" className="text-black text-xs font-bold text-center">Rango de Emisión</label>
            <div className="flex">
              <input type="date" id="fechaInicio" className="w-80 h-9 p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mr-2" />
              <input type="date" id="fechaFin" className="w-80 h-9 p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="metadato" className="text-black text-xs font-bold">Metadato</label>
            <select id="metadato" className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Seleccione...</option>                        
              <option value="opcion">Opción 1</option>
            </select>
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="ultimoValor" className="text-black text-xs font-bold">Último Valor</label>
            <select id="ultimoValor" className="w-full p-2  text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Seleccione...</option>                        
              <option value="opcion">Opción 1</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center gap-1">                    
          <button className="bg-gray-600 p-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search text-white" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
          </button>
          <button className="bg-blue-500 p-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download text-white" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Formulario;
