import { useEffect, useState } from 'react'

export function App() {
  const [cep, setCep] = useState('')
  const [getCep, setGetCep] = useState([])

  function a() {
    var date = document.getElementById('numCep').value
    setCep(date)

    fetch(`https://viacep.com.br/ws/${date}/json/`)
      .then(response => response.json())
      .then(date => setGetCep(date))
  }

  return (
    <div>
      <h1>Consulta de CEP</h1>
      <div>
        <label>CEP: </label>
        <input
          placeholder="Informe seu cep..."
          type="text"
          id="numCep"
          onChange={setCep.value}
        />
        <button onClick={a}>Get CEP</button>
      </div>
      <div>
        <h1>Informações</h1>
        <div>
          <label>CEP: </label>
          <input value={cep} />
        </div>
        <div>
          <label>Logradouro: </label>
          <input value={getCep.logradouro} />
        </div>
        <div>
          <label>Bairro: </label>
          <input value={getCep.bairro} />
        </div>
        <div>
          <label>Cidade: </label>
          <input value={getCep.localidade} />
        </div>
        <div>
          <label>UF: </label>
          <input value={getCep.uf} />
        </div>
      </div>
    </div>
  )
}
