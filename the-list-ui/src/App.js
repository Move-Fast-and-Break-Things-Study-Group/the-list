import './App.css';
import Input from './components/Input';
import { deleteStudents } from './request-functions.js';

function App() {
  return (
    <div className="App">
      <Input />
      <button onClick={() => deleteStudents("635ed6328590391013135b64")}>Тыкалка тест для удаления</button>
    </div>
  );
}

export default App;
