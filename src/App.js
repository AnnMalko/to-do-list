import './App.css';
import { ToDo } from './ToDoList';
import image from './to-do-list.png';
import imageTwo from './to-do-list-2.png';


function App() {
  return (
    <div className="app">
        <div className="container">
      <img src={ image } alt='to do list' width='200px'/>
      </div>
      <div className="container">
        <h1 className="container">Let's add something!</h1>
        </div>
        <div className="container">
        <ToDo />
        </div>
        <div className="image-two">
        <img src={ imageTwo } alt='notebook' width='200px'/>
        </div>
    </div>
  );
}

export default App;
