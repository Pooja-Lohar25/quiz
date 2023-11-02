import Quiz from "./components/Quiz"
import './App.css';

function App() {
  const questionlist = [
    {
      question: "What is the capital of France?",
      options: ["New York", "London", "Paris", "Dublin"],
      answer: "Paris"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo Da Vinci", "Claude Monet"],
      answer: "Leonardo Da Vinci"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Jupiter"
    },
    {
      question: "Who is the author of 'To Kill a Mockingbird'?",
      options: ["Mark Twain", "Harper Lee", "John Steinbeck", "J.K. Rowling"],
      answer: "Harper Lee"
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
      answer: "Carbon Dioxide"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Hg"],
      answer: "Au"
    },
    {
      question: "Who is known as 'The Father of Modern Physics'?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
      answer: "Albert Einstein"
    },
    {
      question: "What is the largest mammal on Earth?",
      options: ["Giraffe", "Elephant", "Blue Whale", "Lion"],
      answer: "Blue Whale"
    },
    {
      question: "In which year did the Titanic sink?",
      options: ["1907", "1912", "1923", "1931"],
      answer: "1912"
    },
    {
      question: "Which gas is most abundant in Earth's atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      answer: "Nitrogen"
    },
    {
      question: "What is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      answer: "2"
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
      answer: "William Shakespeare"
    }

  
  ]
  return (
    <div className="App">
      <Quiz questlist={questionlist} />
    </div>
  );
}

export default App;
