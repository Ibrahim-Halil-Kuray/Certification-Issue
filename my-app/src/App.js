import './App.css';
import Certificate from './components/Certificate';
import pdf from './Certificate.pdf'
import img from './Certificate.jpg'

function App() {
  return (
    <main className="App">
      <Certificate pdf={pdf} img={img}/>
    </main>
  );
}

export default App;
