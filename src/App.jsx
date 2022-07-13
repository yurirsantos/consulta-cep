import { useState } from 'react'
import Swal from 'sweetalert2'

export function App() {
  const [cep, setCep] = useState('')
  const [getCep, setGetCep] = useState([])

  function getCepInfo() {
    var date = document.getElementById('numCep').value
    setCep(date)

    fetch(`https://viacep.com.br/ws/${date}/json/`)
      .then(response => response.json())
      .then(date => setGetCep(date))
  }
  console.log(getCep)
  return (
    <div>
      <h1 className="font-bold text-center text-5xl m-5">Consulta de CEP</h1>
      <div className="bg-gray-200 p-2 text-center w-96 m-auto mt-5 mb-5 rounded-md">
        <label>CEP: </label>
        <input
          placeholder="Informe seu cep..."
          type="text"
          id="numCep"
          onChange={setCep.value}
          className="m-2 p-2 rounded-md"
          maxLength={8}
        />
        <div className="m-1">
          <button
            onClick={getCepInfo}
            className="bg-amber-500 p-5 hover:bg-amber-600 rounded-md font-bold text-xl"
          >
            Get CEP
          </button>
        </div>
      </div>
      <div className="bg-gray-200 p-5 w-96 m-auto rounded-md">
        <h1 className="text-center font-bold text-xl mb-5">Informações</h1>
        <div>
          <div>
            <label>CEP: </label>
            <input value={getCep.cep} className="m-2 p-2 rounded-md" disabled />
          </div>
          <div>
            <label>Logradouro: </label>
            <input
              value={getCep.logradouro}
              className="m-2 p-2 rounded-md"
              disabled
            />
          </div>
          <div>
            <label>Bairro: </label>
            <input
              value={getCep.bairro}
              className="m-2 p-2 rounded-md"
              disabled
            />
          </div>
          <div>
            <label>Cidade: </label>
            <input
              value={getCep.localidade}
              className="m-2 p-2 rounded-md"
              disabled
            />
          </div>
          <div>
            <label>UF: </label>
            <input value={getCep.uf} className="m-2 p-2 rounded-md" disabled />
          </div>
        </div>
      </div>
    </div>
  )
}
