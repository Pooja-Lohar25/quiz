import Quiz from "./components/Quiz"
import questions from "./questions.json"
import './App.css';

function App() {
  const questionlist = questions;
  return (
    <div className="App">
      <Quiz questlist={questionlist} />
    </div>
  );
}

export default App;
