import './App.css';

function App() {
  // Função para impedir que o formulário faça reload da página
  const submitHandLer = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Recebendo Nome:' + data.nome)
    console.log('Recebendo Cep:' + data.cep)

    fetch('https://3011-salmon-donkey-la6cej2q.ws-us16.gitpod.io/?cep=${data.cep}')
    .then(response => response.json())
    .then(console.log)
    .catch(error => console.error)
  }

  return (
    <div className="conteiner">

      <form onSubmit={submitHandLer}>

        <div className="form-group" id="nome">
          <input type="text" name="nome" className="form-control" placeholder="Nome"></input>
        </div>
        <div className="form-group" id="cep">
          <input type="text" name="cep" className="form-control" placeholder="Cep"></input>
        </div>

        <button type="submit" className="btn btn-success" id="btn-consultar">Consultar CEP</button>

      </form>
    </div>
  );
}

export default App;
