import { Calendar } from "./components/Calendar";
import './styles/main.css';

function App() {
  // const date = new Date('2-18-2015');
  // const date = new Date('5-13-2022');
  const date = new Date();
  return <Calendar date={date} />;
}

export default App;
