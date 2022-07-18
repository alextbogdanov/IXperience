import 'bootstrap/dist/css/bootstrap.css';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  return (
    <div className="container mt-5">
      <div className="card p-5">
        <h1>Add Book:</h1>
        <Form />
        <Table />
      </div>
    </div>
  );
}

export default App;
