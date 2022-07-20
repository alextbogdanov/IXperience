import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import TaskInput from './Components/TaskInput';
import TaskTable from './Components/TaskTable';

function App() {
  return (
    <div className="container mt-5">
        <div className="card border-color-secondary">
            <div className="card-body p-3">
                <h1 className="m-3 text-center">Task List</h1>
                <hr />
                <h3 className="mt-4 mb-4 text-center">Our simple task list</h3>
                <TaskInput />
                <TaskTable />
            </div>
        </div>
    </div>
  );
}

export default App;
